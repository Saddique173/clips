import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import IUser from '../models/user.model';
import { Observable, of } from 'rxjs';
import { map, delay, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>
  public isAuthenticatedWithDelay$: Observable<boolean>
  public redirect:boolean = false;

  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute) {

    this.usersCollection = db.collection('users');
    //auth.user.subscribe(console.log)

    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )

    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(2000)
    )
    //?? nullish coolelacing operator
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.route.firstChild),
      switchMap(route => route?.data ?? of({ authOnly: false }))
    ).subscribe((data)=>{
      this.redirect= data.authOnly ?? false
    })
    //this.route.data.subscribe(console.log)
  }

  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error("Password is not provided!");
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email, userData.password
    )

    if (!userCred.user) {
      throw new Error("User Cant't be found");
    }
    //--------------------------------
    // await this.usersCollection.add({
    //   name: userData.name,
    //   email: userData.email,
    //   age: userData.age,
    //   phoneNumber: userData.phoneNumber
    // })
    //----------------------------------
    
    // set the relationship for user and doc-colletion in firebase db
    await this.usersCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber
    })

    await userCred.user.updateProfile({
      displayName: userData.name
    })
  }

  public async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }
    await this.auth.signOut();

    if(this.redirect){
      await this.router.navigateByUrl('/') // absolute path
    } 
  }

}
