import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-estado-solicitud',
  templateUrl: './create-estado-solicitud.component.html',
  styleUrls: ['./create-estado-solicitud.component.css']
})
export class CreateEstadoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstadosSolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
     
    })
  }

  SaveRecord(){
    let model = new EstadoSolicitudModel();
    model.NombreEstadoSolicitud = this.form.controls["name"].value;
    
    this.service.SaveRecord(model).subscribe({
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
