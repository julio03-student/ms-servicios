import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';
import { EditSolicitudComponent } from './edit-solicitud/edit-solicitud.component';
import { ListSolicitudComponent } from './list-solicitud/list-solicitud.component';
import { RemoveSolicitudComponent } from './remove-solicitud/remove-solicitud.component';

const routes: Routes = [
  {
    path: "list-solicitudes",
    component: ListSolicitudComponent
  },
  {
    path: "edit-solicitud",
    component: EditSolicitudComponent
  },
  {
    path: "create-solicitud",
    component: CreateSolicitudComponent
  },
  {
    path: "remove-solicitud",
    component: RemoveSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
