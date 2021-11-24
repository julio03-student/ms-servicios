import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';

const routes: Routes = [
  {
    path: "list-users",
    component: ListUsersComponent
  },
  {
    path: "edit-user",
    component: EditUserComponent
  },
  {
    path: "create-user",
    component: CreateUserComponent
  },
  {
    path: "remove-user",
    component: RemoveUserComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "change-password",
    component: ChangePasswordComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
