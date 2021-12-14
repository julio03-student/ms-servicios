import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { DesautenticacionGuard } from 'src/app/guards/desautenticacion.guard';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { CreateRolComponent } from './general/rol/create-rol/create-rol.component';
import { EditRolComponent } from './general/rol/edit-rol/edit-rol.component';
import { ListRolesComponent } from './general/rol/list-roles/list-roles.component';
import { RemoveRolComponent } from './general/rol/remove-rol/remove-rol.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';

const routes: Routes = [
  {
    path: "list-users",
    component: ListUsersComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-user/:id",
    component: EditUserComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-user",
    component: CreateUserComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-user/:id",
    component: RemoveUserComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [DesautenticacionGuard]
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    canActivate: [DesautenticacionGuard]
  },
  {
    path: "list-roles",
    component: ListRolesComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-rol/:id",
    component: EditRolComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-rol",
    component: CreateRolComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-rol/:id",
    component: RemoveRolComponent,
    canActivate: [AutenticacionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
