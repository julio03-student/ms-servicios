import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

@Component({
  selector: 'app-list-tipo-vinculacion',
  templateUrl: './list-tipo-vinculacion.component.html',
  styleUrls: ['./list-tipo-vinculacion.component.css']
})
export class ListTipoVinculacionComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  tipoVinculacionList: TipoVinculacionModel[] = []

  constructor(
    private tipoVinculacionService: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.tipoVinculacionService.GetRecordList().subscribe({
      next: (data: TipoVinculacionModel[]) =>{
        console.log("Lista: "+data)
        this.tipoVinculacionList = data
        this.total = this.tipoVinculacionList.length
      }
    })
  }

}
