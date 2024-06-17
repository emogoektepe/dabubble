import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../firebase/authentication.service';
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('emailInput') emailInputRef!: ElementRef;
  @ViewChild('passwordIpnut') passwordIpnutRef!: ElementRef;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  auth = inject(Auth);

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onSubmit(event: any) {
    if (event.submitter.name == 'login') {
      this.login();
    } else if (event.submitter.name == 'guestLogin') {
      this.guestLogin();
    }
  }

  login() {
    this.authService.loginWithEmailAndPassword(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    );
  }

  guestLogin() {}

  handleSpace(event: any) {
    Utils.space(event);
  }

  focusEmailInput() {
    this.emailInputRef.nativeElement.focus();
  }

  focusPasswordInput() {
    this.passwordIpnutRef.nativeElement.focus();
  }
}
