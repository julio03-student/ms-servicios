import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-invitacionEvaluar',
  templateUrl: './edit-invitacion-evaluar.component.html',
  styleUrls: ['./edit-invitacion-evaluar.component.css']
})
export class EditInvitacionEvaluarComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InvitacionEvaluarService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id: ["",[Validators.required]],
      fecha_invitacion:["",[Validators.required]],
      fecha_respuesta:["",[Validators.required]],
      estado_invitacion:["",[Validators.required]],
      observaciones_invitacion:["",[Validators.required]],
    })
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        this.form.controls["id"].setValue(data.IdInvitacionEvaluar)
        this.form.controls["fecha_invitacion"].setValue(data.FechaInvitacion)
        this.form.controls["fecha_respuesta"].setValue(data.FechaRespuesta)
        this.form.controls["estado_invitacion"].setValue(data.EstadoInvitacion)
        this.form.controls["observaciones_invitacion"].setValue(data.ObservacionesInvitacionEvaluar)
      }
    })
  }

  SaveRecord(){
    let model = new InvitacionEvaluarModel();
    model.IdInvitacionEvaluar = this.form.controls["id"].value
    model.FechaInvitacion = this.form.controls["fecha_inivitacion"].value;
    model.FechaRespuesta = this.form.controls["fecha_respuesta"].value
    model.EstadoInvitacion = this.form.controls['estado_invitacion'].value
    model.ObservacionesInvitacionEvaluar = this.form.controls["observaciones_invitacion"].value

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
      next: (data: InvitacionEvaluarModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/invitacionEvaluar/list-invitacionesEvaluar'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }


}
