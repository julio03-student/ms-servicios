import { createFactoryType } from '@angular/compiler/src/render3/r3_factory';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
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
    component: ListComiteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-comite/:id",
    component: EditComiteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-comite",
    component: CreateComiteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-comite/:id",
    component: RemoveComiteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-departamentos",
    component: ListDepartamentoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-departamento/:id",
    component: EditDepartamentoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-departamento",
    component: CreateDepartamentoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-departamento/:id",
    component: RemoveDepartamentoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-estadosSolicitud",
    component: ListEstadosSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-estadoSolicitud/:id",
    component: EditEstadoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-estadoSolicitud",
    component: CreateEstadoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-estadoSolicitud/:id",
    component: RemoveEstadoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-facultades",
    component: ListFacultadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-facultade/:id",
    component: EditFacultadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-facultad",
    component: CreateFacultadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-facultade/:id",
    component: RemoveFacultadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-lineasInvestigacion",
    component: ListLineaInvestigacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-lineaInvestigacione/:id",
    component: EditLineaInvestigacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-lineaInvestigacion",
    component: CreateLineaInvestigacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-lineaInvestigacione/:id",
    component: RemoveLineaInvestigacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-modalidades",
    component: ListModalidadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-modalidad/:id",
    component: EditModalidadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-modalidad",
    component: CreateModalidadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-modalidad/:id",
    component: RemoveModalidadComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-recordatorios",
    component: ListRecordatorioComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-recordatorio/:id",
    component: EditRecordatorioComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-recordatorio",
    component: CreateRecordatorioComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-recordatorio/:id",
    component: RemoveRecordatorioComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-resultadosEvaluaciones",
    component: ListResultadoEvaluacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-resultadoEvaluacione/:id",
    component: EditResultadoEvaluacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-resultadoEvaluacion",
    component: CreateResultadoEvaluacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-resultadoEvaluacione/:id",
    component: RemoveResultadoEvaluacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-tiposSolicitud",
    component: ListTipoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-tipoSolicitude/:id",
    component: EditTipoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-tipoSolicitud",
    component: CreateTipoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-tipoSolicitude/:id",
    component: RemoveTipoSolicitudComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "list-tiposVinculacion",
    component: ListTipoVinculacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-tipoVinculacion/:id",
    component: EditTipoVinculacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-tipoVinculacion",
    component: CreateTipoVinculacionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-tipoVinculacion/:id",
    component: RemoveTipoVinculacionComponent,
    canActivate: [AutenticacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
