import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { SecurityService } from 'src/app/services/share/security.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private service: SecurityService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      correo:["",[Validators.required,Validators.email]],
    })
  }

  RecuperarContrasena(){
    let correo = this.GetForm['correo'].value
    if(this.form.invalid){
      OpenGeneralMessage(GeneralData.invalidFormMessage)
    }else{
      this.service.ResetPassword(correo).subscribe({
        next:(correo: string) => {
          console.log(correo)
        },  
        error: (error: any) =>{
          OpenGeneralMessage(GeneralData.GENERAL_MESSAGE_ERROR)
        }}
      )
      OpenGeneralMessage(`${GeneralData.confirmEmail} ${correo}`)
    }
  }

  get GetForm(){
    return this.form.controls
  }

}
