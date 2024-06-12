import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('mailInput') mailInputRef!: ElementRef;
  @ViewChild('passwortInput') passwortInputtRef!: ElementRef;
  @ViewChild('policyCheckbox') policyCheckbox!: ElementRef;

  isSubmitted = false;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', Validators.required],
    checkbox: ['', Validators.requiredTrue],
  });

  constructor(private location: Location, private fb: FormBuilder) {}

  onSubmit(): void {
    this.isSubmitted = true;
  }

  handleSpace(event: any) {
    Utils.space(event);
  }

  focusNameInput() {
    this.nameInputRef.nativeElement.focus();
  }
  focusMailInput() {
    this.mailInputRef.nativeElement.focus();
  }
  focusPasswortInput() {
    this.passwortInputtRef.nativeElement.focus();
  }
  goBack() {
    this.location.back();
  }
}
