import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-tipo-vinculacion',
  templateUrl: './remove-tipo-vinculacion.component.html',
  styleUrls: ['./remove-tipo-vinculacion.component.css']
})
export class RemoveTipoVinculacionComponent implements OnInit {

  id: number = 0
  name: string = ""
  descripcion: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service:TipoVinculacionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoVinculacionModel) => {
        if(data.IdTipoVinculacion && data.NombreTipoVinculacion && data.DescripcionTipoVinculacion){
          this.id = data.IdTipoVinculacion
          this.name = data.NombreTipoVinculacion
          this.descripcion = data.DescripcionTipoVinculacion
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: TipoVinculacionModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-tiposVinculacion'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
