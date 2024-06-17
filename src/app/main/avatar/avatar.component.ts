import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { TransferDataService } from '../../firebase/transferData.service';
import { RouterLink } from '@angular/router';
import { User } from '../../../models/user.class';
import { CreateUserService } from '../../firebase/createUser.service';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  imagesIndex: number[] = [1, 2, 3, 4, 5, 6];
  pickedImage: number = 0;
  createdName: string = '';

  constructor(
    private location: Location,
    private tD: TransferDataService,
    private cU: CreateUserService
  ) {}

  ngOnInit() {
    this.createdName = this.tD.user.fullName;
  }

  ngOnDestroy() {
    this.tD.user.imageIndex = this.pickedImage;
    this.cU.addUser(this.tD.user);
    this.tD.user = new User();
  }

  goBack() {
    this.location.back();
  }

  chooseImageAsAvatar(imageIndex: number) {
    this.pickedImage = imageIndex;
  }
}
