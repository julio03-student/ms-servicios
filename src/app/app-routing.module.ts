import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJuradoComponent } from './modules/jurado/list-jurado/list-jurado.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "security",
    loadChildren : () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {
    path: "jurado",
    loadChildren : () => import("./modules/jurado/jurado.module").then(x => x.JuradoModule)
  },
  {
    path: "proponente",
    loadChildren : () => import("./modules/proponente/proponente.module").then(x => x.ProponenteModule)
  },
  {
    path: "solicitud",
    loadChildren : () => import("./modules/solicitud/solicitud.module").then(x => x.SolicitudModule)
  },
  {
    path: "invitacionEvaluar",
    loadChildren : () => import("./modules/invitacion-evaluar/invitacion-evaluar.module").then(x => x.InvitacionEvaluarModule)
  },
  {
    path: "negocios",
    loadChildren : () => import("./modules/business/business.module").then(x => x.BusinessModule)
  },
  {
    path: "reportes",
    loadChildren : () => import("./modules/reports/reports.module").then(x => x.ReportsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
