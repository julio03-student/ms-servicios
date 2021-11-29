import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ResultadosEvaluacionModel } from 'src/app/models/parametros/resultadosEvaluacion.model';
import { ResultadosEvaluacionService } from 'src/app/services/parametros/resultados-evaluacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-resultado-evaluacion',
  templateUrl: './edit-resultado-evaluacion.component.html',
  styleUrls: ['./edit-resultado-evaluacion.component.css']
})
export class EditResultadoEvaluacionComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ResultadosEvaluacionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      descripcion_resultado:["",[Validators.required]],
      fecha_resultado:["",[Validators.required]],
      formato:["",[Validators.required]],
      idInvitacion:["",[Validators.required]],
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ResultadosEvaluacionModel) => {
        this.form.controls["id"].setValue(data.IdResultadoEvaluacion)
        this.form.controls["descripcion_resultado"].setValue(data.DescripcionResultadoEvaluacion)
        this.form.controls["fecha_resultado"].setValue(data.FechaResultadoEvaluacion)
        this.form.controls["formato"].setValue(data.FormatoDiligenciado)
        this.form.controls["idInvitacion"].setValue(data.IdInvitacionEvaluar)
      }
    })
  }
  
  SaveRecord(){
    let model = new ResultadosEvaluacionModel();
    model.IdResultadoEvaluacion = this.form.controls["id"].value
    model.DescripcionResultadoEvaluacion = this.form.controls["descripcion_resultado"].value;
    model.FechaResultadoEvaluacion = this.form.controls["fecha_resultado"].value;
    model.FormatoDiligenciado = this.form.controls["formato"].value;
    model.IdInvitacionEvaluar = this.form.controls["idInvitacion"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
      next: (data: ResultadosEvaluacionModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-resultadosEvaluaciones'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}
