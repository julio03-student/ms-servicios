import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-linea-investigacion',
  templateUrl: './create-linea-investigacion.component.html',
  styleUrls: ['./create-linea-investigacion.component.css']
})
export class CreateLineaInvestigacionComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LineaInvestigacionService
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
    let model = new LineaInvestigacionModel();
    model.NombreLineaInvestigacion = this.form.controls["name"].value;
    /* model.Formato = this.form.controls['last_name'].value */
    
    this.service.SaveRecord(model).subscribe({
      next: (data: LineaInvestigacionModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-lineasInvestigacion'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
