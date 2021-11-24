import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProponenteComponent } from './create-proponente/create-proponente.component';
import { EditProponenteComponent } from './edit-proponente/edit-proponente.component';
import { ListProponenteComponent } from './list-proponente/list-proponente.component';
import { RemoveProponenteComponent } from './remove-proponente/remove-proponente.component';

const routes: Routes = [
  {
    path: "list-proponentes",
    component: ListProponenteComponent
  },
  {
    path: "edit-proponente",
    component: EditProponenteComponent
  },
  {
    path: "create-proponente",
    component: CreateProponenteComponent
  },
  {
    path: "remove-proponente",
    component: RemoveProponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProponenteRoutingModule { }
