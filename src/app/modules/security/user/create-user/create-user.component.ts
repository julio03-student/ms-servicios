import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/models/user-data-model';
import { UsuariosService } from 'src/app/services/parametros/users.service'

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuariosService
  ) { }
  
  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
      last_name:["",[Validators.required]],
      documento:["",[Validators.required]],
      fecha:["",[Validators.required]],
      email:["",[Validators.required]],
      direccion:["",[Validators.required]],
      phone:["",[Validators.required]],
      estado:["",[Validators.required]],
      rol:["",[Validators.required]]
    })
  }

  SaveRecord(){
    let model = new UserModel();
    model.nombresUsuario = this.form.controls["name"].value;
    model.apellidosUsuario = this.form.controls['last_name'].value
    model.documentoUsuario = this.form.controls["documento"].value
    model.fechaNacimientoUsuario = this.form.controls["fecha"].value
    model.emailUsuario = this.form.controls["email"].value
    model.direccionUsuario = this.form.controls["direccion"].value
    model.celularUsuario = this.form.controls["phone"].value
    model.estadoUsuario = this.form.controls["estado"].value
    model.idRol = this.form.controls["rol"].value
    
    this.service.SaveRecord(model).subscribe({
      next: (data: UserModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/security/list-users'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
