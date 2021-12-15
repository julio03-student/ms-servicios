import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { ComiteComponent } from './comite/comite.component';
import { CreateComiteComponent } from './comite/create-comite/create-comite.component';
import { EditComiteComponent } from './comite/edit-comite/edit-comite.component';
import { ListComiteComponent } from './comite/list-comite/list-comite.component';
import { RemoveComiteComponent } from './comite/remove-comite/remove-comite.component';
import { LineaInvestigacionComponent } from './linea-investigacion/linea-investigacion.component';
import { CreateLineaInvestigacionComponent } from './linea-investigacion/create-linea-investigacion/create-linea-investigacion.component';
import { EditLineaInvestigacionComponent } from './linea-investigacion/edit-linea-investigacion/edit-linea-investigacion.component';
import { ListLineaInvestigacionComponent } from './linea-investigacion/list-linea-investigacion/list-linea-investigacion.component';
import { RemoveLineaInvestigacionComponent } from './linea-investigacion/remove-linea-investigacion/remove-linea-investigacion.component';
import { TipoSolicitudComponent } from './tipo-solicitud/tipo-solicitud.component';
import { CreateTipoSolicitudComponent } from './tipo-solicitud/create-tipo-solicitud/create-tipo-solicitud.component';
import { EditTipoSolicitudComponent } from './tipo-solicitud/edit-tipo-solicitud/edit-tipo-solicitud.component';
import { ListTipoSolicitudComponent } from './tipo-solicitud/list-tipo-solicitud/list-tipo-solicitud.component';
import { RemoveTipoSolicitudComponent } from './tipo-solicitud/remove-tipo-solicitud/remove-tipo-solicitud.component';
import { EstadoSolicitudComponent } from './estado-solicitud/estado-solicitud.component';
import { CreateEstadoSolicitudComponent } from './estado-solicitud/create-estado-solicitud/create-estado-solicitud.component';
import { EditEstadoSolicitudComponent } from './estado-solicitud/edit-estado-solicitud/edit-estado-solicitud.component';
import { ListEstadosSolicitudComponent } from './estado-solicitud/list-estado-solicitud/list-estado-solicitud.component';
import { RemoveEstadoSolicitudComponent } from './estado-solicitud/remove-estado-solicitud/remove-estado-solicitud.component';
import { ModalidadComponent } from './modalidad/modalidad.component';
import { CreateModalidadComponent } from './modalidad/create-modalidad/create-modalidad.component';
import { EditModalidadComponent } from './modalidad/edit-modalidad/edit-modalidad.component';
import { ListModalidadComponent } from './modalidad/list-modalidad/list-modalidad.component';
import { RemoveModalidadComponent } from './modalidad/remove-modalidad/remove-modalidad.component';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { CreateRecordatorioComponent } from './recordatorio/create-recordatorio/create-recordatorio.component';
import { EditRecordatorioComponent } from './recordatorio/edit-recordatorio/edit-recordatorio.component';
import { ListRecordatorioComponent } from './recordatorio/list-recordatorio/list-recordatorio.component';
import { RemoveRecordatorioComponent } from './recordatorio/remove-recordatorio/remove-recordatorio.component';
import { CreateResultadoEvaluacionComponent } from './resultado-evaluacion/create-resultado-evaluacion/create-resultado-evaluacion.component';
import { EditResultadoEvaluacionComponent } from './resultado-evaluacion/edit-resultado-evaluacion/edit-resultado-evaluacion.component';
import { ListResultadoEvaluacionComponent } from './resultado-evaluacion/list-resultado-evaluacion/list-resultado-evaluacion.component';
import { RemoveResultadoEvaluacionComponent } from './resultado-evaluacion/remove-resultado-evaluacion/remove-resultado-evaluacion.component';
import { TipoVinculacionComponent } from './tipo-vinculacion/tipo-vinculacion.component';
import { CreateTipoVinculacionComponent } from './tipo-vinculacion/create-tipo-vinculacion/create-tipo-vinculacion.component';
import { EditTipoVinculacionComponent } from './tipo-vinculacion/edit-tipo-vinculacion/edit-tipo-vinculacion.component';
import { ListTipoVinculacionComponent } from './tipo-vinculacion/list-tipo-vinculacion/list-tipo-vinculacion.component';
import { RemoveTipoVinculacionComponent } from './tipo-vinculacion/remove-tipo-vinculacion/remove-tipo-vinculacion.component';
import { FacultadComponent } from './facultad/facultad.component';
import { CreateFacultadComponent } from './facultad/create-facultad/create-facultad.component';
import { EditFacultadComponent } from './facultad/edit-facultad/edit-facultad.component';
import { ListFacultadComponent } from './facultad/list-facultad/list-facultad.component';
import { RemoveFacultadComponent } from './facultad/remove-facultad/remove-facultad.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CreateDepartamentoComponent } from './departamento/create-departamento/create-departamento.component';
import { EditDepartamentoComponent } from './departamento/edit-departamento/edit-departamento.component';
import { ListDepartamentoComponent } from './departamento/list-departamento/list-departamento.component';
import { RemoveDepartamentoComponent } from './departamento/remove-departamento/remove-departamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ComiteComponent,
    CreateComiteComponent,
    EditComiteComponent,
    ListComiteComponent,
    RemoveComiteComponent,
    LineaInvestigacionComponent,
    CreateLineaInvestigacionComponent,
    EditLineaInvestigacionComponent,
    ListLineaInvestigacionComponent,
    RemoveLineaInvestigacionComponent,
    TipoSolicitudComponent,
    CreateTipoSolicitudComponent,
    EditTipoSolicitudComponent,
    ListTipoSolicitudComponent,
    RemoveTipoSolicitudComponent,
    EstadoSolicitudComponent,
    CreateEstadoSolicitudComponent,
    EditEstadoSolicitudComponent,
    ListEstadosSolicitudComponent,
    RemoveEstadoSolicitudComponent,
    ModalidadComponent,
    CreateModalidadComponent,
    EditModalidadComponent,
    ListModalidadComponent,
    RemoveModalidadComponent,
    RecordatorioComponent,
    CreateRecordatorioComponent,
    EditRecordatorioComponent,
    ListRecordatorioComponent,
    RemoveRecordatorioComponent,
    CreateResultadoEvaluacionComponent,
    EditResultadoEvaluacionComponent,
    ListResultadoEvaluacionComponent,
    RemoveResultadoEvaluacionComponent,
    TipoVinculacionComponent,
    CreateTipoVinculacionComponent,
    EditTipoVinculacionComponent,
    ListTipoVinculacionComponent,
    RemoveTipoVinculacionComponent,
    FacultadComponent,
    CreateFacultadComponent,
    EditFacultadComponent,
    ListFacultadComponent,
    RemoveFacultadComponent,
    DepartamentoComponent,
    CreateDepartamentoComponent,
    EditDepartamentoComponent,
    ListDepartamentoComponent,
    RemoveDepartamentoComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class BusinessModule { }
