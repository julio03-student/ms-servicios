import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    CreateUserComponent,
    ListUsersComponent,
    EditUserComponent,
    RemoveUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
