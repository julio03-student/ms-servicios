import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { CreateProponenteComponent } from './create-proponente/create-proponente.component';
import { EditProponenteComponent } from './edit-proponente/edit-proponente.component';
import { ListProponenteComponent } from './list-proponente/list-proponente.component';
import { RemoveProponenteComponent } from './remove-proponente/remove-proponente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateProponenteComponent,
    EditProponenteComponent,
    ListProponenteComponent,
    RemoveProponenteComponent
  ],
  imports: [
    CommonModule,
    ProponenteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProponenteModule { }
