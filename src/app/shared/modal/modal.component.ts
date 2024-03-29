import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

  // import service at only component level
  // providers: [ModalService], // array of services
})
export class ModalComponent implements OnInit,OnDestroy {
  @Input() modalID = '';
  constructor(public modal: ModalService, public el: ElementRef) {
    //console.log(this.modal.visible);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
ngOnDestroy():void{
  document.body.removeChild(this.el.nativeElement);
}
  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
