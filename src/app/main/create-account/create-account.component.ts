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

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, this.noLeadingWhitespaceValidator]],
    email: [
      '',
      [
        Validators.required,
        this.noLeadingWhitespaceValidator,
        Validators.email,
      ],
    ],
    password: ['', [Validators.required, this.noLeadingWhitespaceValidator]],
    checkbox: ['', Validators.requiredTrue],
  });

  constructor(private location: Location, private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(
      'submitted form',
      this.registerForm.value,
      this.registerForm.invalid
    );
    this.isSubmitted = true;
  }

  noLeadingWhitespaceValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    if (control.value && control.value.startsWith(' ')) {
      return { leadingWhitespace: true };
    }
    return null;
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
