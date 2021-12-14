import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol.model';
import { RolesService } from 'src/app/services/parametros/roles.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-rol',
  templateUrl: './create-rol.component.html',
  styleUrls: ['./create-rol.component.css']
})
export class CreateRolComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RolesService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      nombre_rol:["",[Validators.required]],
     
    })
  }

  SaveRecord(){
    let model = new RolModel();
    model.nombreRol = this.form.controls["nombre_rol"].value;
    
    this.service.SaveRecord(model).subscribe({
      next: (data: RolModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/security/list-roles'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
