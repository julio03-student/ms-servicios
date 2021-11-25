import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredencialsModel } from 'src/app/models/credenciales-usuario.model';
import {MD5} from 'crypto-js'

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      username:["",[Validators.required,Validators.email, Validators.minLength(GeneralData.usernameMinLenght)]],
      password:["", [Validators.required, Validators.minLength(GeneralData.passwordMinLenght)]]
    })
  }

  Login(){
    if(this.form.invalid){
      OpenGeneralMessage(GeneralData.invalidFormMessage)
    }else{
      OpenGeneralMessage(GeneralData.validFormMessage)
      let modelo = new UserCredencialsModel()
      modelo.username = this.GetForm['username'].value
      modelo.password = MD5(this.GetForm['password'].value).toString()
    }
  }

  get GetForm(){
    return this.form.controls
  }

}
