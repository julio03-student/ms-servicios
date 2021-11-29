import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamentos.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
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
      id_facultad:["",[Validators.required]]
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        this.form.controls["id"].setValue(data.IdDepartamento)
        this.form.controls["name"].setValue(data.NombreDepartamento)
        this.form.controls["id_facultad"].setValue(data.IdFacultad)
      }
    })
  }
  
  SaveRecord(){
    let model = new DepartamentoModel();
    model.IdDepartamento = this.form.controls["id"].value
    model.NombreDepartamento = this.form.controls["name"].value;
    model.IdFacultad = this.form.controls["id_facultad"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
