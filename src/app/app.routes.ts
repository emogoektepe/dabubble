import { Routes } from '@angular/router';
import { CreateAccountComponent } from './main/create-account/create-account.component';
import { AvatarComponent } from './main/avatar/avatar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/login/login.component';

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
    ],
  },
];
