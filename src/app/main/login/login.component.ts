import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransferDataService } from '../../firebase/transferData.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('emailInput') emailInputRef!: ElementRef;
  @ViewChild('passwordIpnut') passwordIpnutRef!: ElementRef;

  focusEmailInput() {
    this.emailInputRef.nativeElement.focus();
  }

  focusPasswordInput() {
    this.passwordIpnutRef.nativeElement.focus();
  }
}
