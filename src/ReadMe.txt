

-NEW obserable: behaviousr subject (we can not force obserable to push values)
--composit indexes


Setting up Firebase:
https://firebase.google.com/

account used to create project 
    msraza.173@gmail.com

    installing the AngularFire package to help us integrate Firebase into an Angular project. A few errors will pop up related to installing this package. To get rid of these errors, you must update the tsconfig.json file.



{ "compilerOptions": { "skipLibCheck": true, } }


ng add @angular/fire
https://console.firebase.google.com/project/clipsfire-fe613/overview


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRCla4lRvg7pHWDFYtdS-hxaqa96Se_F8",
  authDomain: "clipsfire-fe613.firebaseapp.com",
  projectId: "clipsfire-fe613",
  storageBucket: "clipsfire-fe613.appspot.com",
  messagingSenderId: "629324012997",
  appId: "1:629324012997:web:e0d1c77e316ee0423abfac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

----------------------------------------------
-----firebase db rules (default)
 match /{document=**} {
      allow read, write: if request.time < timestamp.date(2024, 1, 26);
    }

//-----------------
---modified rules
      match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null;
    }

    ----------------------------------------
    generate custom validators class
    ng g class user/validators/RegisterValidators
    ng g class user/validators/EmailTaken

    ng g component About
    ng g module Video --routing // will create an additional routing module for videos and will import in VideoModule
    ng g component video/Manage
    ng g component video/Upload
    ng g component clip

    Create new Custom Directives------------------
    ng g directive shared/directives/EventBlocker

    install package to create unique upload file name 
    npm i uuid @types/uuid

    --------------Rules to upload video files-------------------------
    rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {

    // This rule allows anyone with your Storage bucket reference to view, edit,
    // and delete all data in your Storage bucket. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Storage bucket will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Storage bucket will be denied until you Update
    // your rules
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
      								request.resource.contentType.matches('video/*') &&
                      request.resource.size < 10*1000 *1000;
      allow delete: if request.auth != null

    }
  }
}
--------------------------------------------------

ng g service services/clip

ng g component video/edit