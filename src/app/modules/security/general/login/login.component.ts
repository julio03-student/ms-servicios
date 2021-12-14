import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredencialsModel } from 'src/app/models/credenciales-usuario.model';
import { MD5 } from 'crypto-js'
import { SecurityService } from 'src/app/services/share/security.service';
import { LocalStorageService } from 'src/app/services/share/local-storage.service';
import { SessionData } from 'src/app/models/session-data-model';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  siteKey: string = "6Lf4Y6EdAAAAAGM94YuFMPNZesFKC2N3G413ENxe";

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm() {
    this.form = this.fb.group({
      username: ["ingmiguelangelgosan@gmail.com", [Validators.required, Validators.email, Validators.minLength(GeneralData.usernameMinLenght)]],
      password: ["VI2GDnXA", [Validators.required, Validators.minLength(GeneralData.passwordMinLenght)]],
      recaptcha: ['', Validators.required]
    })
  }

  Login() {
    if (this.form.invalid) {
      OpenGeneralMessage(GeneralData.invalidFormMessage)
    } else {

      let modelo = new UserCredencialsModel()
      modelo.username = this.GetForm['username'].value
      console.log("Clave ingresada:" + modelo.password)
      modelo.password = MD5(this.GetForm['password'].value).toString()
      this.securityService.Login(modelo).subscribe({
        next: (data: SessionData) => {
          console.log(data)
          if (data.token != "") {
            this.localStorageService.SaveSessionData(data)
            data.isLoggedIn = true
            this.securityService.RefreshSessionData(data)
            OpenGeneralMessage(GeneralData.validFormMessage)
          }else{
            OpenGeneralMessage(GeneralData.invalidFormMessage)
          }
        },
        error: (error: any) => {
          OpenGeneralMessage(GeneralData.GENERAL_MESSAGE_ERROR)
        }
      })

    }
  }

  get GetForm() {
    return this.form.controls
  }

}
