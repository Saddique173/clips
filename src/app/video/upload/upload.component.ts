import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { v4 as uuid } from 'uuid';
import { last, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FirebaseApps } from '@angular/fire/app';
import { ClipService } from 'src/app/services/clip.service';
import {Router} from '@angular/router';
import { FfmpegService } from 'src/app/services/ffmpeg.service';
import { combineLatest } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnDestroy {
  isDragover = false;
  file: File | null = null
  nextStep = false;

  showAlert = false;
  alertColor ='blue'
  alertMsg = 'Please wait your clip is being uploaded.'
  inSubmission = false;

  percentage = 0;
  showPercentage = false;

   user: firebase.User | null = null
  task?: AngularFireUploadTask

  screenshots:string[] = []
  selectedScreenshot = ''
  screenshotTask?: AngularFireUploadTask
  title = new FormControl('', [Validators.required, Validators.minLength(3)])

  uploadForm = new FormGroup({
    title: this.title
  })

  constructor(private storage: AngularFireStorage,
    private auth: AngularFireAuth,
    private clipsService:ClipService,
    private router: Router,
    public ffmpegService:FfmpegService
    ) 
    { 
      auth.user.subscribe(user => this.user = user)
      this.ffmpegService.init()
    }

  ngOnDestroy(): void {
    this.task?.cancel(); // if we want to cancel the file upload
  }

 async storeFile($event: Event) {
  if(this.ffmpegService.isRunning){
    return
  }
    this.isDragover = false;

    // below line only deale with uploading file by drag-drop event
    //this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null

    //-----------------------------------
    // below lines deals with both file-input and drag-drop event
    this.file = ($event as DragEvent).dataTransfer ?
    ($event as DragEvent).dataTransfer?.files.item(0) ?? null :
    ($event.target as HTMLInputElement).files?.item(0) ?? null    
    //-----------------------------------
    //console.log(this.file)

    if (!this.file || this.file.type !== 'video/mp4') {
      return
    }

    //code for taking screen-shots
    this.screenshots = await this.ffmpegService.getScreenshots(this.file)
    this.selectedScreenshot = this.screenshots[0];
    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/, '')
    )
    this.nextStep = true;
  }
//-------------------------------------------

  async uploadFile() {
    this.uploadForm.disable()

    this.showAlert = true;
    this.alertColor ='blue'
    this.alertMsg = 'Please wait! Your clip is being uploaded.'
    this.inSubmission = true;
    this.showPercentage= true;

    const clipFileName = uuid();

    //const clipPath= `clips/${this.file?.name}` // uploaded file- original name
    const clipPath= `clips/${clipFileName}.mp4` // unique name created by uuid
    const screenshotBlob = await this.ffmpegService.blobFromURL(
    this.selectedScreenshot
    )
    const screenshotPath = `screenshots/${clipFileName}.png`


    //const task = this.storage.upload(clipPath, this.file);
    this.task = this.storage.upload(clipPath, this.file);
    const clipRef = this.storage.ref(clipPath)

   this.screenshotTask = this.storage.upload(screenshotPath, screenshotBlob)
   const screenshotRef = this.storage.ref(screenshotPath)


    //single task progress
    // this.task.percentageChanges().subscribe(progress =>{
    //   this.percentage = progress as number/100
    // })

    combineLatest([
      this.task.percentageChanges(),
    this.screenshotTask.percentageChanges()
    ]).subscribe((progress) =>{
      const [clipProgress, screenshotProgress] = progress

      if(!clipProgress ||!screenshotProgress){
        return
      }
      const total = clipProgress + screenshotProgress
      this.percentage = total as number/200
    })



    forkJoin([
      this.task.snapshotChanges(),
      this.screenshotTask.snapshotChanges()
    ]).pipe(
      //last(),
      switchMap(()=> forkJoin([
        clipRef.getDownloadURL(),
        screenshotRef.getDownloadURL()
      ])) //lec#213: storing the file data
    ).subscribe({
      next:async (urls)=> {    //next: (sanpshot)=>{
        const [clipURL, screenshotURL] = urls

        const clip = {
          uid: this.user?.uid as string,
          displayName: this.user?.displayName as string,
          title: this.title.value,
          fileName: `${clipFileName}.mp4`,
          url:clipURL, // ES6 short hand syntax to add properties
          screenshotURL,
          screenshotFileName:`${clipFileName}.png`,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }
        
     const clipDocRef =  await this.clipsService.createClip(clip);

        //console.log(clip)
        this.alertColor='green'
        this.alertMsg='Success! Your clip is now ready to share with world.'
        this.showPercentage= false;

        setTimeout(()=>{
          this.router.navigate([
            'clip', clipDocRef.id
          ])
        },2000)

      },error:(error)=>{
        this.uploadForm.enable()

        this.alertColor='red'
        this.alertMsg='Upload failed! Please try again later.'
        this.inSubmission = true;
        this.showPercentage= false;
        console.error(error);
      }
    })
  }
  //------------------------------------------
}
