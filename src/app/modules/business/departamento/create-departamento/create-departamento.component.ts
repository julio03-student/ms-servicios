import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamentos.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-departamento',
  templateUrl: './create-departamento.component.html',
  styleUrls: ['./create-departamento.component.css']
})
export class CreateDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      nombre_departamento:["",[Validators.required]],
      id_facultad:["",[Validators.required]]
     
    })
  }

  SaveRecord(){
    let model = new DepartamentoModel();
    model.NombreDepartamento = this.form.controls["nombre_departamento"].value;
    model.IdFacultad = this.form.controls["id_facultad"].value;
    
    this.service.SaveRecord(model).subscribe({
      next: (data: DepartamentoModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-departamentos'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
