import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-estado-solicitud',
  templateUrl: './edit-estado-solicitud.component.html',
  styleUrls: ['./edit-estado-solicitud.component.css']
})
export class EditEstadoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstadosSolicitudService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      name:["",[Validators.required]]
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: EstadoSolicitudModel) => {
        this.form.controls["id"].setValue(data.IdEstadoSolicitud)
        this.form.controls["name"].setValue(data.NombreEstadoSolicitud)
      }
    })
  }
  
  SaveRecord(){
    let model = new EstadoSolicitudModel();
    model.IdEstadoSolicitud = this.form.controls["id"].value
    model.NombreEstadoSolicitud = this.form.controls["name"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
      next: (data: EstadoSolicitudModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-estadosSolicitud'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}
