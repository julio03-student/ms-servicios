import { Component, OnInit } from '@angular/core';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

@Component({
  selector: 'app-list-tipo-vinculacion',
  templateUrl: './list-tipo-vinculacion.component.html',
  styleUrls: ['./list-tipo-vinculacion.component.css']
})
export class ListTipoVinculacionComponent implements OnInit {

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
      }
    })
  }

}
