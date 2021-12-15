import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-recordatorio',
  templateUrl: './edit-recordatorio.component.html',
  styleUrls: ['./edit-recordatorio.component.css']
})
export class EditRecordatorioComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RecordatorioService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      fecha_recordatorio:["",[Validators.required]],
      horario_recordatorio:["",[Validators.required]],
      tipo_recordatorio:["",[Validators.required]],
      descripcion_recordatorio:["",[Validators.required]],
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: RecordatorioModel) => {
        this.form.controls["id"].setValue(data.IdRecordatorio)
        this.form.controls["fecha_recordatorio"].setValue(data.FechaRecordatorio)
        this.form.controls["horario_recordatorio"].setValue(data.HoraRecordatorio)
        this.form.controls["tipo_recordatorio"].setValue(data.TipoRecordatorio)
        this.form.controls["descripcion_recordatorio"].setValue(data.DescripcionRecordatorio)
      }
    })
  }
  
  SaveRecord(){
    let model = new RecordatorioModel();
    model.IdRecordatorio = this.form.controls["id"].value
    model.FechaRecordatorio = this.form.controls["fecha_recordatorio"].value;
    model.HoraRecordatorio = this.form.controls["horario_recordatorio"].value;
    model.TipoRecordatorio = this.form.controls["tipo_recordatorio"].value;
    model.DescripcionRecordatorio = this.form.controls["descripcion_recordatorio"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
