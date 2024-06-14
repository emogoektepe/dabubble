import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
