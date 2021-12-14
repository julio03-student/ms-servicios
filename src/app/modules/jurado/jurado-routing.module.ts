import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { EditComiteComponent } from '../business/comite/edit-comite/edit-comite.component';
import { CreateJuradoComponent } from './create-jurado/create-jurado.component';
import { EditJuradoComponent } from './edit-jurado/edit-jurado.component';
import { ListJuradoComponent } from './list-jurado/list-jurado.component';
import { RemoveJuradoComponent } from './remove-jurado/remove-jurado.component';

const routes: Routes = [
  {
    path: "list-jurados",
    component: ListJuradoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-jurado/:id",
    component: EditJuradoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-jurado",
    component: CreateJuradoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-jurado/:id",
    component: RemoveJuradoComponent,
    canActivate: [AutenticacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuradoRoutingModule { }
