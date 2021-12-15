import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';
import { InvitacionEvaluarModule } from '../invitacion-evaluar.module';

declare const OpenGeneralMessage: any
declare const InitSelectById: any;

@Component({
  selector: 'app-create-invitacionEvaluar',
  templateUrl: './create-invitacion-evaluar.component.html',
  styleUrls: ['./create-invitacion-evaluar.component.css']
})
export class CreateInvitacionEvaluarComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  juradoList: JuradoModel[] =[]
  recordatorioList: RecordatorioModel[] = []

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InvitacionEvaluarService,
    private juradoService: JuradoService,
    private recordatorioService: RecordatorioService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.GetOptionsToSelects()
  }


  CreateForm(){
    this.form = this.fb.group({
      fecha_invitacion:[[Validators.required]],
      fecha_respuesta:[[Validators.required]],
      observaciones_invitacion:["",[Validators.required]],
      id_jurado:[[Validators.required]],
      id_recordatorio:[[Validators.required]],
    })
  }

  SaveRecord(){
    console.log("Seleted:"+ this.form.controls["id_jurado"].value);
    
    let model = new InvitacionEvaluarModel();
    model.FechaInvitacion = this.form.controls["fecha_invitacion"].value;
    model.FechaRespuesta = this.form.controls["fecha_respuesta"].value
    model.ObservacionesInvitacionEvaluar = this.form.controls["observaciones_invitacion"].value
    model.IdJurado = parseInt(this.form.controls["id_jurado"].value)
    model.IdRecordatorio = parseInt(this.form.controls["id_recordatorio"].value)
    
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

  GetOptionsToSelects() {
    this.juradoService.GetRecordList().subscribe(
      {
        next: (data: JuradoModel[]) => {
          console.log("data: " + data)
          this.juradoList = data;
          setTimeout(() => {
            InitSelectById("selJurados");
          }, 100);
        }
      }
    );

    this.recordatorioService.GetRecordList().subscribe(
      {
        next: (data: RecordatorioModel[]) => {
          this.recordatorioList = data;
          setTimeout(() => {
            InitSelectById("selRecordatorios");
          }, 100);
        }
      }
    );
  }
}
