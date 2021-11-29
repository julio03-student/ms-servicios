import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-tipo-solicitud',
  templateUrl: './remove-tipo-solicitud.component.html',
  styleUrls: ['./remove-tipo-solicitud.component.css']
})
export class RemoveTipoSolicitudComponent implements OnInit {

  id: number = 0
  name: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: TipoSolicitudService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitud) => {
        if(data.IdTipoSolicitud && data.NombreTipoSolicitud){
          this.id = data.IdTipoSolicitud
          this.name = data.NombreTipoSolicitud
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: TipoSolicitud) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-tiposSolicitud'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
