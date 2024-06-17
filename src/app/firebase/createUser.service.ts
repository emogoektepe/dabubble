import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { Utils } from '../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  auth: Auth = inject(Auth);
  firestore: Firestore = inject(Firestore);

  constructor() {}

  async addUser(user: User) {
    await addDoc(this.getUserRef(), Utils.getCleanUserJson(user));
    createUserWithEmailAndPassword(this.auth, user.email, user.password ?? '')
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  getUserRef() {
    return collection(this.firestore, 'user');
  }
}
