import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-solicitud',
  templateUrl: './edit-solicitud.component.html',
  styleUrls: ['./edit-solicitud.component.css']
})
export class EditSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id: ["",[Validators.required]],
      fecha_solicitud:["",[Validators.required]],
      nombre_trabajo:["",[Validators.required]],
      archivo_solicitud:["",[Validators.required]],
      descripcion_general:["",[Validators.required]],
    })
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        this.form.controls["id"].setValue(data.IdSolicitud)
        this.form.controls["fecha_solicitud"].setValue(data.FechaSolicitud)
        this.form.controls["nombre_trabajo"].setValue(data.NombreTrabajoSolicitud)
        this.form.controls["archivo_solicitud"].setValue(data.ArchivoSolicitud)
        this.form.controls["descripcion_general"].setValue(data.DescripcionGeneralSolicitud)
      }
    })
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.IdSolicitud = this.form.controls["id"].value
    model.FechaSolicitud = this.form.controls["fecha_solicitud"].value;
    model.NombreTrabajoSolicitud = this.form.controls["nombre_trabajo"].value
    model.ArchivoSolicitud = this.form.controls['archivo_solicitud'].value
    model.DescripcionGeneralSolicitud = this.form.controls["descripcion_general"].value

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
