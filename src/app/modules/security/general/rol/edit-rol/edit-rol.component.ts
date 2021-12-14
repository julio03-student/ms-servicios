import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol.model';
import { RolesService } from 'src/app/services/parametros/roles.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.css']
})
export class EditRolComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RolesService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      nombre_rol:["",[Validators.required]],
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = this.activeRoute.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: RolModel) => {
        this.form.controls["id"].setValue(data._idRol)
        this.form.controls["nombre_rol"].setValue(data.nombreRol)
      }
    })
  }
  
  SaveRecord(){
    let model = new RolModel();
    model._idRol = this.form.controls["id"].value
    model.nombreRol = this.form.controls["nombre_rol"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
