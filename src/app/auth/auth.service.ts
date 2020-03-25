import { Subject } from 'rxjs/subject';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "./user.model";
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from '../training/training.service';



@Injectable()
// goal of this is to fake a user login,
// inform other parts of the app about the login
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private afAuth: AngularFireAuth, private trainingService: TrainingService) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/home']);
      } else {
        this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      console.log(result);
    
    }).catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}