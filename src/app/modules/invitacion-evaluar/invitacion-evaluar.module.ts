import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitacionEvaluarRoutingModule } from './invitacion-evaluar-routing.module';
import { ListInvitacionEvaluarComponent } from './list-invitacion-evaluar/list-invitacion-evaluar.component';
import { CreateInvitacionEvaluarComponent } from './create-invitacion-evaluar/create-invitacion-evaluar.component';
import { EditInvitacionEvaluarComponent } from './edit-invitacion-evaluar/edit-invitacion-evaluar.component';
import { RemoveInvitacionEvaluarComponent } from './remove-invitacion-evaluar/remove-invitacion-evaluar.component';


@NgModule({
  declarations: [
    ListInvitacionEvaluarComponent,
    CreateInvitacionEvaluarComponent,
    EditInvitacionEvaluarComponent,
    RemoveInvitacionEvaluarComponent
  ],
  imports: [
    CommonModule,
    InvitacionEvaluarRoutingModule
  ]
})
export class InvitacionEvaluarModule { }
