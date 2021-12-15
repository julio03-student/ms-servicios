import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';

@Component({
  selector: 'app-list-linea-investigacion',
  templateUrl: './list-linea-investigacion.component.html',
  styleUrls: ['./list-linea-investigacion.component.css']
})
export class ListLineaInvestigacionComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
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
        this.total = this.lineaInvestigacionList.length
      }
    })
  }

}
