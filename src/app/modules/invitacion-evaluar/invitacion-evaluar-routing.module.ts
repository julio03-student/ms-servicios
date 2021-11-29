import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvitacionEvaluarComponent } from './create-invitacion-evaluar/create-invitacion-evaluar.component';
import { EditInvitacionEvaluarComponent } from './edit-invitacion-evaluar/edit-invitacion-evaluar.component';
import { ListInvitacionEvaluarComponent } from './list-invitacion-evaluar/list-invitacion-evaluar.component';
import { RemoveInvitacionEvaluarComponent } from './remove-invitacion-evaluar/remove-invitacion-evaluar.component';

const routes: Routes = [
  {
    path: "list-invitacionesEvaluar",
    component: ListInvitacionEvaluarComponent
  },
  {
    path: "edit-invitacionEvaluar/:id",
    component: EditInvitacionEvaluarComponent
  },
  {
    path: "create-invitacionEvaluar",
    component: CreateInvitacionEvaluarComponent
  },
  {
    path: "remove-invitacionEvaluar/:id",
    component: RemoveInvitacionEvaluarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitacionEvaluarRoutingModule { }
