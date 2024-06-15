import { Injectable } from '@angular/core';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class TransferDataService {
  user: User = new User();
}
