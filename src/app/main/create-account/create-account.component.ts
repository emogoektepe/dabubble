import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Utils } from '../../shared/utils';
import { TransferDataService } from '../../firebase/transferData.service';
import { LoadDataService } from '../../firebase/loadData.service';

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
  @ViewChild('passwordInput') passwordInputtRef!: ElementRef;
  @ViewChild('policyCheckbox') policyCheckbox!: ElementRef;

  isSubmitted = false;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  emailIsTaken = false;

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', Validators.required],
    checkbox: ['', Validators.requiredTrue],
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
    private tD: TransferDataService,
    private lD: LoadDataService
  ) {}

  ngOnDestroy() {
    this.tD.user.fullName = this.registerForm.value.fullName ?? '';
    this.tD.user.email = this.registerForm.value.email ?? '';
    this.tD.user.password = this.registerForm.value.password ?? '';
  }

  onSubmit() {
    this.checkMailIsTaken(this.registerForm.value.email ?? '');
    if (!this.emailIsTaken) {
      this.isSubmitted = true;
      this.router.navigate(['/avatar']);
    }
  }

  checkMailIsTaken(email: string) {
    for (let user of this.lD.user) {
      if (user.email === email) {
        this.emailIsTaken = true;
        return;
      }
    }
    this.emailIsTaken = false;
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
  focusPasswordInput() {
    this.passwordInputtRef.nativeElement.focus();
  }
  goBack() {
    this.location.back();
  }
}
