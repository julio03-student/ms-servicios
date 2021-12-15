import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { RemoveSolicitudComponent } from './remove-solicitud/remove-solicitud.component';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';
import { ListSolicitudComponent } from './list-solicitud/list-solicitud.component';
import { EditSolicitudComponent } from './edit-solicitud/edit-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RemoveSolicitudComponent,
    CreateSolicitudComponent,
    ListSolicitudComponent,
    EditSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SolicitudModule { }
