import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-recordatorio',
  templateUrl: './create-recordatorio.component.html',
  styleUrls: ['./create-recordatorio.component.css']
})
export class CreateRecordatorioComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RecordatorioService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      fecha_recordatorio:["",[Validators.required]],
      horario_recordatorio:["",[Validators.required]],
      tipo_recordatorio:["",[Validators.required]],
      descripcion_recordatorio:["",[Validators.required]],
     
    })
  }

  SaveRecord(){
    let model = new RecordatorioModel();
    model.FechaRecordatorio = this.form.controls["fecha_recordatorio"].value;
    model.HorarioRecordatorio = this.form.controls["horario_recordatorio"].value;
    model.TipoRecordatorio = this.form.controls["tipo_recordatorio"].value;
    model.DescripcionRecordatorio = this.form.controls["descripcion_recordatorio"].value;
    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
      next: (data: RecordatorioModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-recordatorios'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}