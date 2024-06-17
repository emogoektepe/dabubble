import { Injectable, inject } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { Utils } from '../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class LoadDataService {
  firestore: Firestore = inject(Firestore);

  user: User[] = [];
  unsubUser;

  constructor() {
    this.unsubUser = this.subUserList();
  }

  subUserList() {
    return onSnapshot(collection(this.firestore, 'user'), (userList) => {
      this.user = [];
      userList.forEach((user) => {
        this.user.push(Utils.setUserObject(user.data() as User));
      });
    });
  }
}
