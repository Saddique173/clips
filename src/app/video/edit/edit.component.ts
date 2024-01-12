import { Component, OnInit, OnDestroy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import IClip from 'src/app/models/clip.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy, OnChanges {

  inSubmission = false;
  showAlert = false;
  alertColor = 'blue'
  alertMsg = 'Please wait! Updating clip'

  @Output() update = new EventEmitter()





  @Input() activeClip: IClip | null = null

  clipID = new FormControl('')

  title = new FormControl('', [Validators.required, Validators.minLength(3)])

  editForm = new FormGroup({
    title: this.title,
    id: this.clipID
  })


  constructor(private modal: ModalService, private clipService: ClipService) { }

  ngOnInit(): void {
    this.modal.register('editClip')
  }

  ngOnDestroy() {
    this.modal.unregister('editClip')
  }

  ngOnChanges() {
    if (!this.activeClip) {
      return
    }
    this.inSubmission = false;
    this.showAlert = false;
    
    this.clipID.setValue(this.activeClip.docID)
    this.title.setValue(this.activeClip.title)
  }

  async submit() {

    if(!this.activeClip){
      return
    }

    this.inSubmission = true;
    this.showAlert = true;
    this.alertColor = 'blue'
    this.alertMsg = 'Please wait! Updating the clip.'
    try {
      await this.clipService.updateClip(
        this.clipID.value,
        this.title.value
      )
    }
    catch (e) {
      this.inSubmission = false;
      //this.showAlert = true;
      this.alertColor = 'red'
      this.alertMsg = 'Some thing went wrong. Try again later'
      return
    }

    this.activeClip.title= this.title.value
    this.update.emit(this.activeClip)  // update property will emit the event and send data to parent component
    this.inSubmission = false;
    this.alertColor = 'green';
    this.alertMsg = 'Success!'
  }

}
