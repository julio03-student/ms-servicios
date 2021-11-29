import { Component, OnInit } from '@angular/core';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';

@Component({
  selector: 'app-list-recordatorio',
  templateUrl: './list-recordatorio.component.html',
  styleUrls: ['./list-recordatorio.component.css']
})
export class ListRecordatorioComponent implements OnInit {

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
      }
    })
  }

}
