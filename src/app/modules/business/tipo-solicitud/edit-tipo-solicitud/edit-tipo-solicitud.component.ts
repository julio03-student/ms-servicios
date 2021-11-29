import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-tipo-solicitud',
  templateUrl: './edit-tipo-solicitud.component.html',
  styleUrls: ['./edit-tipo-solicitud.component.css']
})
export class EditTipoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      nombre_tipo:["",[Validators.required]],
      descripcion_tipo:["",[Validators.required]]
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitud) => {
        this.form.controls["id"].setValue(data.IdTipoSolicitud)
        this.form.controls["nombre_tipo"].setValue(data.NombreTipoSolicitud)
        this.form.controls["descripcion_tipo"].setValue(data.DescripcionTipoSolicitud)
      }
    })
  }
  
  SaveRecord(){
    let model = new TipoSolicitud();
    model.IdTipoSolicitud = this.form.controls["id"].value
    model.NombreTipoSolicitud = this.form.controls["nombre_tipo"].value
    model.DescripcionTipoSolicitud = this.form.controls["descripcion_tipo"].value

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
      next: (data: TipoSolicitud) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-tiposSolicitud'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}
