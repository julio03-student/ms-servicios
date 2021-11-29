import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-proponente',
  templateUrl: './create-proponente.component.html',
  styleUrls: ['./create-proponente.component.css']
})
export class CreateProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
      otros_nombres:["",[Validators.required]],
      last_name:["",[Validators.required]],
      phone:["",[Validators.required]],
      documento:["",[Validators.required]],
      email:["",[Validators.required]],
      direccion:["",[Validators.required]],
      fecha_nacimiento:["",[Validators.required]],
      IdVinculacion:["",[Validators.required]]
    })
  }

  SaveRecord(){
    let model = new ProponenteModel();
    model.PrimerNombreProponente = this.form.controls["name"].value;
    model.OtrosNombresProponente = this.form.controls["otros_nombres"].value
    model.ApellidosProponente = this.form.controls['last_name'].value
    model.CorreoProponente = this.form.controls["email"].value
    model.Direccion = this.form.controls["direccion"].value
    model.DocumentoIdProponente = this.form.controls["documento"].value
    model.CelularProponente = this.form.controls["phone"].value
    model.fechaNacimiento = this.form.controls["fecha_nacimiento"].value
    model.IdTipoVinculacion = this.form.controls["IdVinculacion"].value

    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
      next: (data: ProponenteModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/proponente/list-proponentes'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}