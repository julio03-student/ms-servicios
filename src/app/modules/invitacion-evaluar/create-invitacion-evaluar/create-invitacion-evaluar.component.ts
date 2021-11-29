import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';
import { InvitacionEvaluarModule } from '../invitacion-evaluar.module';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-invitacionEvaluar',
  templateUrl: './create-invitacion-evaluar.component.html',
  styleUrls: ['./create-invitacion-evaluar.component.css']
})
export class CreateInvitacionEvaluarComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InvitacionEvaluarService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      fecha_invitacion:["",[Validators.required]],
      fecha_respuesta:["",[Validators.required]],
      estado_invitacion:["",[Validators.required]],
      observaciones_invitacion:["",[Validators.required]],
      id_jurado:["",[Validators.required]],
      id_recordatorio:["",[Validators.required]],
    })
  }

  SaveRecord(){
    let model = new InvitacionEvaluarModel();
    model.FechaInvitacion = this.form.controls["fecha_invitacion"].value;
    model.FechaRespuesta = this.form.controls["fecha_respuesta"].value
    model.EstadoInvitacion = this.form.controls['estado_invitacion'].value
    model.ObservacionesInvitacionEvaluar = this.form.controls["observaciones_invitacion"].value
    model.IdJurado = this.form.controls["id_jurado"].value
    model.IdRecordatorio = this.form.controls["id_recordatorio"].value

    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
      next: (data: InvitacionEvaluarModule) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/invitacionEvaluar/list-invitacionesEvaluar'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
