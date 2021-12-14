import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { CreateProponenteComponent } from './create-proponente/create-proponente.component';
import { EditProponenteComponent } from './edit-proponente/edit-proponente.component';
import { ListProponenteComponent } from './list-proponente/list-proponente.component';
import { RemoveProponenteComponent } from './remove-proponente/remove-proponente.component';

const routes: Routes = [
  {
    path: "list-proponentes",
    component: ListProponenteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "edit-proponente/:id",
    component: EditProponenteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "create-proponente",
    component: CreateProponenteComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: "remove-proponente/:id",
    component: RemoveProponenteComponent,
    canActivate: [AutenticacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProponenteRoutingModule { }
