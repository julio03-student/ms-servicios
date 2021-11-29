import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ResultadosEvaluacionModel } from 'src/app/models/parametros/resultadosEvaluacion.model';
import { ResultadosEvaluacionService } from 'src/app/services/parametros/resultados-evaluacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-resultado-evaluacion',
  templateUrl: './create-resultado-evaluacion.component.html',
  styleUrls: ['./create-resultado-evaluacion.component.css']
})
export class CreateResultadoEvaluacionComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ResultadosEvaluacionService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      descripcion_resultado:["",[Validators.required]],
      fecha_resultado:["",[Validators.required]],
      formato:["",[Validators.required]],
      idInvitacion:["",[Validators.required]],
     
    })
  }

  SaveRecord(){
    let model = new ResultadosEvaluacionModel();
    model.DescripcionResultadoEvaluacion = this.form.controls["descripcion_resultado"].value;
    model.FechaResultadoEvaluacion = this.form.controls["fecha_resultado"].value;
    model.FormatoDiligenciado = this.form.controls["formato"].value;
    model.IdInvitacionEvaluar = parseInt(this.form.controls["idInvitacion"].value);
    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
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