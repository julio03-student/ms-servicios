import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';

@Component({
  selector: 'app-list-estado-solicitud',
  templateUrl: './list-estado-solicitud.component.html',
  styleUrls: ['./list-estado-solicitud.component.css']
})
export class ListEstadosSolicitudComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  estadosolicitudlist: EstadoSolicitudModel[] = []

  constructor(
    private estadosolicitudservice: EstadosSolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.estadosolicitudservice.GetRecordList().subscribe({
      next: (data: EstadoSolicitudModel[]) =>{
        console.log("Lista: "+data)
        this.estadosolicitudlist = data
        this.total = this.estadosolicitudlist.length
      }
    })
  }
}
