import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-linea-investigacion',
  templateUrl: './edit-linea-investigacion.component.html',
  styleUrls: ['./edit-linea-investigacion.component.css']
})
export class EditLineaInvestigacionComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LineaInvestigacionService,
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
      /* formato:["",[Validators.required]] */
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        this.form.controls["id"].setValue(data.IdLineaInvestigacion)
        this.form.controls["name"].setValue(data.NombreLineaInvestigacion)
      }
    })
  }

  SaveRecord(){
    let model = new LineaInvestigacionModel();
    model.IdLineaInvestigacion = this.form.controls["id"].value
    model.NombreLineaInvestigacion = this.form.controls["name"].value

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
