import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';

@Component({
  selector: 'app-list-solicitud',
  templateUrl: './list-solicitud.component.html',
  styleUrls: ['./list-solicitud.component.css']
})
export class ListSolicitudComponent implements OnInit {

  solicitudlist: SolicitudModel[] = []

  constructor(
    private solicitudservice: SolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.solicitudservice.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) =>{
        console.log("Lista: "+data)
        this.solicitudlist = data
      }
    })
  }

}