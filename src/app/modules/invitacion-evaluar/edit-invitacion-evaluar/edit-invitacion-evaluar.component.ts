import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';

declare const OpenGeneralMessage: any
declare const InitSelectById: any;

@Component({
  selector: 'app-edit-invitacionEvaluar',
  templateUrl: './edit-invitacion-evaluar.component.html',
  styleUrls: ['./edit-invitacion-evaluar.component.css']
})
export class EditInvitacionEvaluarComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  juradoList: JuradoModel[] =[]
  recordatorioList: RecordatorioModel[] = []

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InvitacionEvaluarService,
    private activeRoute: ActivatedRoute,
    private juradoService: JuradoService,
    private recordatorioService: RecordatorioService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.GetOptionsToSelects()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id: ["",[Validators.required]],
      fecha_invitacion:["",[Validators.required]],
      fecha_respuesta:["",[Validators.required]],
      observaciones_invitacion:["",[Validators.required]],
      id_jurado:["",[Validators.required]],
      id_recordatorio:["",[Validators.required]],
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
        this.form.controls["observaciones_invitacion"].setValue(data.ObservacionesInvitacionEvaluar)
        this.form.controls["id_jurado"].setValue(data.IdJurado)
        this.form.controls["id_recordatorio"].setValue(data.IdRecordatorio)
      }
    })
  }

  SaveRecord(){
    let model = new InvitacionEvaluarModel();
    model.IdInvitacionEvaluar = this.form.controls["id"].value
    model.FechaInvitacion = this.form.controls["fecha_invitacion"].value;
    model.FechaRespuesta = this.form.controls["fecha_respuesta"].value
    model.ObservacionesInvitacionEvaluar = this.form.controls["observaciones_invitacion"].value
    model.IdJurado = this.form.controls["id_jurado"].value
    model.IdRecordatorio = this.form.controls["id_recordatorio"].value

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
