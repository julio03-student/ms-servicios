import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuradoRoutingModule } from './jurado-routing.module';
import { CreateJuradoComponent } from './create-jurado/create-jurado.component';
import { EditJuradoComponent } from './edit-jurado/edit-jurado.component';
import { ListJuradoComponent } from './list-jurado/list-jurado.component';
import { RemoveJuradoComponent } from './remove-jurado/remove-jurado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateJuradoComponent,
    EditJuradoComponent,
    ListJuradoComponent,
    RemoveJuradoComponent
  ],
  imports: [
    CommonModule,
    JuradoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JuradoModule { }
