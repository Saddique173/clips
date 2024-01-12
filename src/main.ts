import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

if (environment.production) {
  enableProdMode();
}
// code to initlize the firebase before angular. 
// it will show the navigation menu links correctly (links before user login and after login)
firebase.initializeApp(environment.firebase)
let appInit = false

firebase.auth().onAuthStateChanged(()=>{
  if(!appInit){
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  }
appInit = true;

})

//--------------
