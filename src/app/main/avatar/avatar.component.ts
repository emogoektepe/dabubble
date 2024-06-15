import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { TransferDataService } from '../../firebase/transferData.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  imagesIndex = [1, 2, 3, 4, 5, 6];
  pickedImage = 0;
  createdName = '';

  constructor(private location: Location, private tD: TransferDataService) {}

  ngOnInit() {
    this.createdName = this.tD.user.fullName;
  }

  ngOnDestroy() {
    this.tD.user.imageIndex = this.pickedImage;
    console.log(this.tD.user);
  }

  goBack() {
    this.location.back();
  }

  chooseImageAsAvatar(imageIndex: number) {
    this.pickedImage = imageIndex;
  }
}
