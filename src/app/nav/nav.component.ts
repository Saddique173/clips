import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
//import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  //isAuthenticated = false
  constructor(
    public auth: AuthService, public modal: ModalService) {
    // this.auth.isAuthenticated$.subscribe(status => {
    //   this.isAuthenticated = status;
    // })
  }

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }
  // code refactor and moved to service
  // async logout($event: Event) {
  //   $event.preventDefault();
  //   await this.afAuth.signOut();
  //   await this.router.navigateByUrl('/') // absolute path
  // }
}
