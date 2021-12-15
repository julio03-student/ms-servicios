import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';

@Component({
  selector: 'app-list-proponente',
  templateUrl: './list-proponente.component.html',
  styleUrls: ['./list-proponente.component.css']
})
export class ListProponenteComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  url: string = GeneralData.BUSINESS_ADMIN_URL
  proponentelist: ProponenteModel[] = []

  constructor(
    private proponenteservice: ProponenteService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.proponenteservice.GetRecordList().subscribe({
      next: (data: ProponenteModel[]) =>{
        console.log("Lista: "+data)
        this.proponentelist = data
        this.total = this.proponentelist.length
      }
    })
  }

}