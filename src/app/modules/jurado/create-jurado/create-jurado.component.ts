import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-jurado',
  templateUrl: './create-jurado.component.html',
  styleUrls: ['./create-jurado.component.css']
})
export class CreateJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
      last_name:["",[Validators.required]],
      phone:["",[Validators.required]],
      documento:["",[Validators.required]],
      email:["",[Validators.required]],
      direccion:["",[Validators.required]],
      fecha_nacimiento:["",[Validators.required]],
      vinculacion:["",[Validators.required]],
      invitacion_evaluars:["",[Validators.required]],
      linea_investigacions:["",[Validators.required]],
    })
  }

  SaveRecord(){
    let model = new JuradoModel();
    model.NombreJurado = this.form.controls["name"].value;
    model.ApellidosJurado = this.form.controls['last_name'].value
    model.CorreoJurado = this.form.controls["email"].value
    model.DireccionJurado = this.form.controls["direccion"].value
    model.DocumentoJurado = this.form.controls["documento"].value
    model.TelefonoJurado = this.form.controls["phone"].value
    model.VinculacionJurado = this.form.controls["vinculacion"].value
    model.fechaNacimiento = this.form.controls["fecha_nacimiento"].value
    model.invitacionEvaluars = this.form.controls["invitacion_evaluars"].value
    model.lineaInvestigacions = this.form.controls["linea_investigacions"].value

    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
      next: (data: JuradoModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/jurado/list-jurados'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
