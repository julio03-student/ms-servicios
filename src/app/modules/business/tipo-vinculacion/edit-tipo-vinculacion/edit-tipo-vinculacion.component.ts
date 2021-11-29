import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-tipo-vinculacion',
  templateUrl: './edit-tipo-vinculacion.component.html',
  styleUrls: ['./edit-tipo-vinculacion.component.css']
})
export class EditTipoVinculacionComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoVinculacionService,
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
      descripcion:["",[Validators.required]],
      /* formato:["",[Validators.required]] */
    })
  }

  SearchRecord(){
    console.log("Buscando...."+this.form.controls["id"])
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoVinculacionModel) => {
        this.form.controls["id"].setValue(data.IdTipoVinculacion)
        this.form.controls["name"].setValue(data.NombreTipoVinculacion)
        this.form.controls["descripcion"].setValue(data.DescripcionTipoVinculacion)
      }
    })
  }

  SaveRecord(){
    let model = new TipoVinculacionModel();
    model.IdTipoVinculacion = this.form.controls["id"].value
    model.NombreTipoVinculacion = this.form.controls["name"].value;
    model.DescripcionTipoVinculacion = this.form.controls["descripcion"].value;

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
      next: (data: TipoVinculacionModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-tiposVinculacion'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
