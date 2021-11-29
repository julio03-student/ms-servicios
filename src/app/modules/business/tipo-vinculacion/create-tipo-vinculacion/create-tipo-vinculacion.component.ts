import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-tipo-vinculacion',
  templateUrl: './create-tipo-vinculacion.component.html',
  styleUrls: ['./create-tipo-vinculacion.component.css']
})
export class CreateTipoVinculacionComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      /* formato:["",[Validators.required]] */
     
    })
  }

  SaveRecord(){
    let model = new TipoVinculacionModel();
    model.NombreTipoVinculacion = this.form.controls["name"].value;
    model.DescripcionTipoVinculacion = this.form.controls["descripcion"].value;
    /* model.Formato = this.form.controls['last_name'].value */
    
    this.service.SaveRecord(model).subscribe({
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
