import { Component, OnInit } from '@angular/core';
import { ResultadosEvaluacionModel } from 'src/app/models/parametros/resultadosEvaluacion.model';
import { ResultadosEvaluacionService } from 'src/app/services/parametros/resultados-evaluacion.service';

@Component({
  selector: 'app-list-resultado-evaluacion',
  templateUrl: './list-resultado-evaluacion.component.html',
  styleUrls: ['./list-resultado-evaluacion.component.css']
})
export class ListResultadoEvaluacionComponent implements OnInit {

  resultadosevaluacioneslist: ResultadosEvaluacionModel[] = []

  constructor(
    private resultadoevaluacionservice: ResultadosEvaluacionService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.resultadoevaluacionservice.GetRecordList().subscribe({
      next: (data: ResultadosEvaluacionModel[]) =>{
        console.log("Lista: "+data)
        this.resultadosevaluacioneslist = data
      }
    })
  }

}
