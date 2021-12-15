import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';

@Component({
  selector: 'app-list-recordatorio',
  templateUrl: './list-recordatorio.component.html',
  styleUrls: ['./list-recordatorio.component.css']
})
export class ListRecordatorioComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordatoriolist: RecordatorioModel[] = []

  constructor(
    private recordatorioservice: RecordatorioService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.recordatorioservice.GetRecordList().subscribe({
      next: (data: RecordatorioModel[]) =>{
        console.log("Lista: "+data)
        this.recordatoriolist = data
        this.total = this.recordatoriolist.length
      }
    })
  }

}
