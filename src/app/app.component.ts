import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clips';
  constructor(public auth: AuthService){

  }

  //++++++++++ to test memory leakage, when modal is needed to be unregister
  // showModal = true;
  // constructor(public modal: ModalService) {}

  // ngOnInit() {
  //   setInterval(() => {
  //     this.showModal = !this.showModal;
  //     console.log(this.modal);
  //   }, 1000);
  // }

  //------------- to test memory leakage, when modal is needed to be unregister
}
