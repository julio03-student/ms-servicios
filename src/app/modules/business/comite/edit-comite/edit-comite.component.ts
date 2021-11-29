import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parametros/comite.model';
import { ComiteService } from 'src/app/services/parametros/comite.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-comite',
  templateUrl: './edit-comite.component.html',
  styleUrls: ['./edit-comite.component.css']
})
export class EditComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id:["", [Validators.required]],
      name:["",[Validators.required]]
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ComiteModel) => {
        this.form.controls["id"].setValue(data.IdComite)
        this.form.controls["name"].setValue(data.NombreComite)
      }
    })
  }
  
  SaveRecord(){
    let model = new ComiteModel();
    model.IdComite = this.form.controls["id"].value
    model.NombreComite = this.form.controls["name"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
      next: (data: ComiteModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-comites'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}
