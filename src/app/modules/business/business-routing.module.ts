import { createFactoryType } from '@angular/compiler/src/render3/r3_factory';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComiteComponent } from './comite/create-comite/create-comite.component';
import { EditComiteComponent } from './comite/edit-comite/edit-comite.component';
import { ListComiteComponent } from './comite/list-comite/list-comite.component';
import { RemoveComiteComponent } from './comite/remove-comite/remove-comite.component';
import { CreateDepartamentoComponent } from './departamento/create-departamento/create-departamento.component';
import { EditDepartamentoComponent } from './departamento/edit-departamento/edit-departamento.component';
import { ListDepartamentoComponent } from './departamento/list-departamento/list-departamento.component';
import { RemoveDepartamentoComponent } from './departamento/remove-departamento/remove-departamento.component';
import { CreateEstadoSolicitudComponent } from './estado-solicitud/create-estado-solicitud/create-estado-solicitud.component';
import { EditEstadoSolicitudComponent } from './estado-solicitud/edit-estado-solicitud/edit-estado-solicitud.component';
import { ListEstadosSolicitudComponent } from './estado-solicitud/list-estado-solicitud/list-estado-solicitud.component';
import { RemoveEstadoSolicitudComponent } from './estado-solicitud/remove-estado-solicitud/remove-estado-solicitud.component';
import { CreateFacultadComponent } from './facultad/create-facultad/create-facultad.component';
import { EditFacultadComponent } from './facultad/edit-facultad/edit-facultad.component';
import { ListFacultadComponent } from './facultad/list-facultad/list-facultad.component';
import { RemoveFacultadComponent } from './facultad/remove-facultad/remove-facultad.component';
import { CreateLineaInvestigacionComponent } from './linea-investigacion/create-linea-investigacion/create-linea-investigacion.component';
import { EditLineaInvestigacionComponent } from './linea-investigacion/edit-linea-investigacion/edit-linea-investigacion.component';
import { ListLineaInvestigacionComponent } from './linea-investigacion/list-linea-investigacion/list-linea-investigacion.component';
import { RemoveLineaInvestigacionComponent } from './linea-investigacion/remove-linea-investigacion/remove-linea-investigacion.component';
import { CreateModalidadComponent } from './modalidad/create-modalidad/create-modalidad.component';
import { EditModalidadComponent } from './modalidad/edit-modalidad/edit-modalidad.component';
import { ListModalidadComponent } from './modalidad/list-modalidad/list-modalidad.component';
import { RemoveModalidadComponent } from './modalidad/remove-modalidad/remove-modalidad.component';
import { CreateRecordatorioComponent } from './recordatorio/create-recordatorio/create-recordatorio.component';
import { EditRecordatorioComponent } from './recordatorio/edit-recordatorio/edit-recordatorio.component';
import { ListRecordatorioComponent } from './recordatorio/list-recordatorio/list-recordatorio.component';
import { RemoveRecordatorioComponent } from './recordatorio/remove-recordatorio/remove-recordatorio.component';
import { CreateResultadoEvaluacionComponent } from './resultado-evaluacion/create-resultado-evaluacion/create-resultado-evaluacion.component';
import { EditResultadoEvaluacionComponent } from './resultado-evaluacion/edit-resultado-evaluacion/edit-resultado-evaluacion.component';
import { ListResultadoEvaluacionComponent } from './resultado-evaluacion/list-resultado-evaluacion/list-resultado-evaluacion.component';
import { RemoveResultadoEvaluacionComponent } from './resultado-evaluacion/remove-resultado-evaluacion/remove-resultado-evaluacion.component';
import { CreateTipoSolicitudComponent } from './tipo-solicitud/create-tipo-solicitud/create-tipo-solicitud.component';
import { EditTipoSolicitudComponent } from './tipo-solicitud/edit-tipo-solicitud/edit-tipo-solicitud.component';
import { ListTipoSolicitudComponent } from './tipo-solicitud/list-tipo-solicitud/list-tipo-solicitud.component';
import { RemoveTipoSolicitudComponent } from './tipo-solicitud/remove-tipo-solicitud/remove-tipo-solicitud.component';
import { CreateTipoVinculacionComponent } from './tipo-vinculacion/create-tipo-vinculacion/create-tipo-vinculacion.component';
import { EditTipoVinculacionComponent } from './tipo-vinculacion/edit-tipo-vinculacion/edit-tipo-vinculacion.component';
import { ListTipoVinculacionComponent } from './tipo-vinculacion/list-tipo-vinculacion/list-tipo-vinculacion.component';
import { RemoveTipoVinculacionComponent } from './tipo-vinculacion/remove-tipo-vinculacion/remove-tipo-vinculacion.component';

const routes: Routes = [
  {
    path: "list-comites",
    component: ListComiteComponent
  },
  {
    path: "edit-comite/:id",
    component: EditComiteComponent
  },
  {
    path: "create-comite",
    component: CreateComiteComponent
  },
  {
    path: "remove-comite/:id",
    component: RemoveComiteComponent
  },
  {
    path: "list-departamentos",
    component: ListDepartamentoComponent
  },
  {
    path: "edit-departamento/:id",
    component: EditDepartamentoComponent
  },
  {
    path: "create-departamento",
    component: CreateDepartamentoComponent
  },
  {
    path: "remove-departamento/:id",
    component: RemoveDepartamentoComponent
  },
  {
    path: "list-estadosSolicitud",
    component: ListEstadosSolicitudComponent
  },
  {
    path: "edit-estadoSolicitud/:id",
    component: EditEstadoSolicitudComponent
  },
  {
    path: "create-estadoSolicitud",
    component: CreateEstadoSolicitudComponent
  },
  {
    path: "remove-estadoSolicitud/:id",
    component: RemoveEstadoSolicitudComponent
  },
  {
    path: "list-facultades",
    component: ListFacultadComponent
  },
  {
    path: "edit-facultade/:id",
    component: EditFacultadComponent
  },
  {
    path: "create-facultad",
    component: CreateFacultadComponent
  },
  {
    path: "remove-facultade/:id",
    component: RemoveFacultadComponent
  },
  {
    path: "list-lineasInvestigacion",
    component: ListLineaInvestigacionComponent
  },
  {
    path: "edit-lineaInvestigacione/:id",
    component: EditLineaInvestigacionComponent
  },
  {
    path: "create-lineaInvestigacion",
    component: CreateLineaInvestigacionComponent
  },
  {
    path: "remove-lineaInvestigacione/:id",
    component: RemoveLineaInvestigacionComponent
  },
  {
    path: "list-modalidades",
    component: ListModalidadComponent
  },
  {
    path: "edit-modalidad/:id",
    component: EditModalidadComponent
  },
  {
    path: "create-modalidad",
    component: CreateModalidadComponent
  },
  {
    path: "remove-modalidad/:id",
    component: RemoveModalidadComponent
  },
  {
    path: "list-recordatorios",
    component: ListRecordatorioComponent
  },
  {
    path: "edit-recordatorio/:id",
    component: EditRecordatorioComponent
  },
  {
    path: "create-recordatorio",
    component: CreateRecordatorioComponent
  },
  {
    path: "remove-recordatorio/;id",
    component: RemoveRecordatorioComponent
  },
  {
    path: "list-resultadosEvaluaciones",
    component: ListResultadoEvaluacionComponent
  },
  {
    path: "edit-resultadoEvaluacione/:id",
    component: EditResultadoEvaluacionComponent
  },
  {
    path: "create-resultadoEvaluacion",
    component: CreateResultadoEvaluacionComponent
  },
  {
    path: "remove-resultadoEvaluacione/:id",
    component: RemoveResultadoEvaluacionComponent
  },
  {
    path: "list-tiposSolicitud",
    component: ListTipoSolicitudComponent
  },
  {
    path: "edit-tipoSolicitude/:id",
    component: EditTipoSolicitudComponent
  },
  {
    path: "create-tipoSolicitud",
    component: CreateTipoSolicitudComponent
  },
  {
    path: "remove-tipoSolicitude/:id",
    component: RemoveTipoSolicitudComponent
  },
  {
    path: "list-tiposVinculacion",
    component: ListTipoVinculacionComponent
  },
  {
    path: "edit-tipoVinculacion/:id",
    component: EditTipoVinculacionComponent
  },
  {
    path: "create-tipoVinculacion",
    component: CreateTipoVinculacionComponent
  },
  {
    path: "remove-tipoVinculacion/:id",
    component: RemoveTipoVinculacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
