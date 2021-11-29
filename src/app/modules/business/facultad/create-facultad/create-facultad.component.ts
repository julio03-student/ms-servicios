import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-facultad',
  templateUrl: './create-facultad.component.html',
  styleUrls: ['./create-facultad.component.css']
})
export class CreateFacultadComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
      codigo:["",[Validators.required]],
      /* formato:["",[Validators.required]] */
     
    })
  }

  SaveRecord(){
    let model = new FacultadModel();
    model.NombreFacultad = this.form.controls["name"].value;
    model.CodigoFacultad = this.form.controls["codigo"].value;
    /* model.Formato = this.form.controls['last_name'].value */
    
    this.service.SaveRecord(model).subscribe({
      next: (data: FacultadModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-facultades'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
