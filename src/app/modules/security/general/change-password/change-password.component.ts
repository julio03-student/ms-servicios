import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MD5 } from 'crypto-js';
import { GeneralData } from 'src/app/config/general-data';
import { CambiarClaveModel } from 'src/app/models/cambiar-clave.model';
import { SecurityService } from 'src/app/services/share/security.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private service: SecurityService,
    private fb: FormBuilder
  ) { }

  form: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      email:["",[Validators.required,Validators.email]],
      claveActual:["",[Validators.required]],
      claveNueva:["",[Validators.required]],
    })
  }

  CambiarContrasena(){
    console.log('Cambiando...');
    
    let change = new CambiarClaveModel()
    change.email = this.GetForm['email'].value
    change.claveActual = MD5(this.GetForm['claveActual'].value).toString()
    change.claveNueva = MD5( this.GetForm['claveNueva'].value).toString()

    console.log(change);

    if(this.form.invalid){
      OpenGeneralMessage(GeneralData.invalidFormMessage)
    }else{
      this.service.ChangePassword(change).subscribe({
        next:(change: CambiarClaveModel) => {
          console.log(change)
          OpenGeneralMessage(GeneralData.CHANGE_PASSWORD_MESSAGE)
        },
        error: (error: any) =>{
          OpenGeneralMessage(GeneralData.GENERAL_MESSAGE_ERROR)
        }}
      )
    }
    
  }

  get GetForm(){
    return this.form.controls
  }

}
