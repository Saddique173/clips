import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClipService } from 'src/app/services/clip.service';
import IClip from 'src/app/models/clip.model'
import { ModalService } from 'src/app/services/modal.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  videoOrder = '1';
  clips: IClip[] = []
  activeClip:IClip | null = null

  sort$ :BehaviorSubject<string> //we can create an object to act as an observer and obserable at the same time

  constructor(private router: Router, private route: ActivatedRoute, 
    private clipService: ClipService, private modal: ModalService) {
      this.sort$ = new BehaviorSubject(this.videoOrder)
      //this.sort$.subscribe(console.log)
      //this.sort$.next('test')

     }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.videoOrder = params['sort'] === '2' ? params['sort'] : 1;
    // });


    this.route.queryParams.subscribe((params: Params) => {
      this.videoOrder = params['sort'] === '2' ? params['sort'] : 1;
      this.sort$.next(this.videoOrder) // new behaviour subject
    });


    // this.clipService.getUserClips().subscribe(docs =>{
    //   this.clips=[] /// below three dots .... is a spread operator to grab the data from collection
    //   docs.forEach(doc =>{
    //     this.clips.push({
    //       docID:doc.id,
    //       ...doc.data()
    //     })
    //   })
    // })

    this.clipService.getUserClips(this.sort$).subscribe(docs =>{
      this.clips=[] 
      docs.forEach(doc =>{
        this.clips.push({
          docID:doc.id,
          ...doc.data()
        })
      })
    })

  }

  sort(event: Event) {
    const { value } = (event.target as HTMLSelectElement)
    //this.router.navigateByUrl(`/manage?sort=${value}`)

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value
      }
    })
  }

  openModal($event: Event, clip:IClip){
    $event.preventDefault()
    this.activeClip = clip
    this.modal.toggleModal('editClip');
  }

  update($event:IClip){
    this.clips.forEach((element, index)=>{
      if(element.docID == $event.docID){
          this.clips[index].title = $event.title
      }
    })
  }

  deleteClip($event:Event, clip: IClip){
    $event.preventDefault()

    this.clipService.deleteClip(clip)

    // remove the clip form listing 
    this.clips.forEach((element, index)=>{
      if(element.docID == clip.docID){
          this.clips.splice(index, 1)
      }
    })
  }

  async copyToClipboard($event: MouseEvent, docID: string | undefined) {
    $event.preventDefault()

    if (!docID) {
      return
    }
    const url = `${location.origin}/clip/${docID}`
    await navigator.clipboard.writeText(url)
    alert('Link Copied')
  }

}
