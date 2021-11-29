import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-modalidad',
  templateUrl: './edit-modalidad.component.html',
  styleUrls: ['./edit-modalidad.component.css']
})
export class EditModalidadComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      name:["",[Validators.required]],
      /* formato:["",[Validators.required]] */
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ModalidadModel) => {
        this.form.controls["id"].setValue(data.IdModalidad)
        this.form.controls["name"].setValue(data.NombreModalidad)
      }
    })
  }
  
  SaveRecord(){
    let model = new ModalidadModel();
    model.IdModalidad = this.form.controls["id"].value
    model.NombreModalidad = this.form.controls["name"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
