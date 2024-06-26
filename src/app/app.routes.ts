import { Routes } from '@angular/router';
import { CreateAccountComponent } from './main/create-account/create-account.component';
import { AvatarComponent } from './main/avatar/avatar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/login/login.component';
import { ForgotPasswordComponent } from './main/forgot-password/forgot-password.component';
import { ImpressumComponent } from './main/impressum/impressum.component';
import { DatenschutzComponent } from './main/datenschutz/datenschutz.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'create-account',
        component: CreateAccountComponent,
      },
      {
        path: 'avatar',
        component: AvatarComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'impressum',
        component: ImpressumComponent,
      },
      {
        path: 'datenschutz',
        component: DatenschutzComponent,
      },
    ],
  },
];
