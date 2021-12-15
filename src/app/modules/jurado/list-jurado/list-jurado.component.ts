import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

@Component({
  selector: 'app-list-jurado',
  templateUrl: './list-jurado.component.html',
  styleUrls: ['./list-jurado.component.css']
})
export class ListJuradoComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  juradoList: JuradoModel[] = []
  url: string = GeneralData.BUSINESS_ADMIN_URL

  constructor(
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.juradoService.GetRecordList().subscribe({
      next: (data: JuradoModel[]) =>{
        console.log("Lista: "+data)
        this.juradoList = data
        this.total = this.juradoList.length
      }
    })
  }

}
