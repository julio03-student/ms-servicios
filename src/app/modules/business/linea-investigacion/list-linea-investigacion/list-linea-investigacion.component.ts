import { Component, OnInit } from '@angular/core';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';

@Component({
  selector: 'app-list-linea-investigacion',
  templateUrl: './list-linea-investigacion.component.html',
  styleUrls: ['./list-linea-investigacion.component.css']
})
export class ListLineaInvestigacionComponent implements OnInit {

  lineaInvestigacionList: LineaInvestigacionModel[] = []

  constructor(
    private tipoVinculacionService: LineaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.tipoVinculacionService.GetRecordList().subscribe({
      next: (data: LineaInvestigacionModel[]) =>{
        console.log("Lista: "+data)
        this.lineaInvestigacionList = data
      }
    })
  }

}
