import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { CreateInvitacionEvaluarComponent } from './create-invitacion-evaluar/create-invitacion-evaluar.component';
import { EditInvitacionEvaluarComponent } from './edit-invitacion-evaluar/edit-invitacion-evaluar.component';
import { ListInvitacionEvaluarComponent } from './list-invitacion-evaluar/list-invitacion-evaluar.component';
import { RemoveInvitacionEvaluarComponent } from './remove-invitacion-evaluar/remove-invitacion-evaluar.component';

const routes: Routes = [
  {
    path: "list-invitacionesEvaluar",
    component: ListInvitacionEvaluarComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-invitacionEvaluar/:id",
    component: EditInvitacionEvaluarComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-invitacionEvaluar",
    component: CreateInvitacionEvaluarComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-invitacionEvaluar/:id",
    component: RemoveInvitacionEvaluarComponent,
    canActivate: [AutenticacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitacionEvaluarRoutingModule { }
