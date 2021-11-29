import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-tipo-solicitud',
  templateUrl: './create-tipo-solicitud.component.html',
  styleUrls: ['./create-tipo-solicitud.component.css']
})
export class CreateTipoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      nombre_tipo:["",[Validators.required]],
      descripcion_tipo:["",[Validators.required]],
    })
  }

  SaveRecord(){
    let model = new TipoSolicitud();
    model.NombreTipoSolicitud = this.form.controls["nombre_tipo"].value;
    model.DescripcionTipoSolicitud = this.form.controls["descripcion_tipo"].value;
    
    this.service.SaveRecord(model).subscribe({
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
