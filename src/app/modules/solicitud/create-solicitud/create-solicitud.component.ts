import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-solicitud',
  templateUrl: './create-solicitud.component.html',
  styleUrls: ['./create-solicitud.component.css']
})
export class CreateSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      fecha_solicitud:["",[Validators.required]],
      nombre_trabajo:["",[Validators.required]],
      archivo_solicitud:["",[Validators.required]],
      descripcion_general:["",[Validators.required]],
    })
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.FechaSolicitud = this.form.controls["fecha_solicitud"].value;
    model.NombreTrabajoSolicitud = this.form.controls["nombre_trabajo"].value
    model.ArchivoSolicitud = this.form.controls['archivo_solicitud'].value
    model.DescripcionGeneralSolicitud = this.form.controls["descripcion_general"].value

    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/solicitud/list-solicitudes'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
