import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ResultadosEvaluacionModel } from 'src/app/models/parametros/resultadosEvaluacion.model';
import { ResultadosEvaluacionService } from 'src/app/services/parametros/resultados-evaluacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-resultado-evaluacion',
  templateUrl: './remove-resultado-evaluacion.component.html',
  styleUrls: ['./remove-resultado-evaluacion.component.css']
})
export class RemoveResultadoEvaluacionComponent implements OnInit {

  id: number = 0
  descripcion_resultado: string = "" 
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: ResultadosEvaluacionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ResultadosEvaluacionModel) => {
        if(data.IdResultadoEvaluacion && data.DescripcionResultadoEvaluacion){
          this.id = data.IdResultadoEvaluacion
          this.descripcion_resultado = data.DescripcionResultadoEvaluacion
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: ResultadosEvaluacionModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-resultadosEvaluaciones'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}
