import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-modalidad',
  templateUrl: './create-modalidad.component.html',
  styleUrls: ['./create-modalidad.component.css']
})
export class CreateModalidadComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
      /* formato:["",[Validators.required]] */
     
    })
  }

  SaveRecord(){
    let model = new ModalidadModel();
    model.NombreModalidad = this.form.controls["name"].value;
    /* model.Formato = this.form.controls['last_name'].value */
    
    this.service.SaveRecord(model).subscribe({
      next: (data: ModalidadModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-modalidades'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}
