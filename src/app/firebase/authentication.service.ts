import { Injectable, inject } from '@angular/core';
import {
  Auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  auth: Auth = inject(Auth);

  constructor(private router: Router) {
    // onAuthStateChanged(this.auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     const uid = user.uid;
    //     console.log(user);
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
  }

  loginWithEmailAndPassword(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //TODO: login to main page with chats
        // this.router.navigate(['/avatar']);
      })
      .catch((err) => {
        //TODO: error for wrong pw
      });
  }
}
