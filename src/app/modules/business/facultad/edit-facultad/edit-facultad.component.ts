import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-facultad',
  templateUrl: './edit-facultad.component.html',
  styleUrls: ['./edit-facultad.component.css']
})
export class EditFacultadComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService,
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
      codigo:["",[Validators.required]],
      /* formato:["",[Validators.required]] */
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        this.form.controls["id"].setValue(data.IdFacultad)
        this.form.controls["name"].setValue(data.NombreFacultad)
        this.form.controls["codigo"].setValue(data.CodigoFacultad)
      }
    })
  }

  SaveRecord(){
    let model = new FacultadModel();
    model.IdFacultad = this.form.controls["id"].value
    model.NombreFacultad = this.form.controls["name"].value;
    model.CodigoFacultad = this.form.controls["codigo"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
