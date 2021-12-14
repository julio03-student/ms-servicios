import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';
import { EditSolicitudComponent } from './edit-solicitud/edit-solicitud.component';
import { ListSolicitudComponent } from './list-solicitud/list-solicitud.component';
import { RemoveSolicitudComponent } from './remove-solicitud/remove-solicitud.component';

const routes: Routes = [
  {
    path: "list-solicitudes",
    component: ListSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-solicitud/:id",
    component: EditSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-solicitud",
    component: CreateSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-solicitud/:id",
    component: RemoveSolicitudComponent,
    canActivate: [AutenticacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
