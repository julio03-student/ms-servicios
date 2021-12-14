import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/models/user-data-model';
import { UsuariosService } from 'src/app/services/parametros/users.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuariosService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm() {
    this.form = this.fb.group({
      _idUsuario: ["", [Validators.required]],
      name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      email: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      rol: ["", [Validators.required]]
    })
  }

  SearchRecord() {
    console.log("Buscando...." + this.form.controls["_idUsuario"])
    let id = this.activeRoute.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: UserModel) => {
        console.log(data);
        this.form.controls["_idUsuario"].setValue(data._idUsuario)
        this.form.controls["name"].setValue(data.nombresUsuario)
        this.form.controls["last_name"].setValue(data.apellidosUsuario)
        this.form.controls["documento"].setValue(data.documentoUsuario)
        this.form.controls["fecha"].setValue(data.fechaNacimientoUsuario)
        this.form.controls["email"].setValue(data.emailUsuario)
        this.form.controls["direccion"].setValue(data.direccionUsuario)
        this.form.controls["phone"].setValue(data.celularUsuario)
        this.form.controls["estado"].setValue(data.estadoUsuario)
        this.form.controls["rol"].setValue(data.idRol)
      }
    })

  }

  SaveRecord() {
    let model = new UserModel();
    model._idUsuario = this.form.controls["_idUsuario"].value
    model.nombresUsuario = this.form.controls["name"].value;
    model.apellidosUsuario = this.form.controls['last_name'].value
    model.documentoUsuario = this.form.controls["documento"].value
    model.fechaNacimientoUsuario = this.form.controls["fecha"].value
    model.emailUsuario = this.form.controls["email"].value
    model.direccionUsuario = this.form.controls["direccion"].value
    model.celularUsuario = this.form.controls["phone"].value
    model.estadoUsuario = this.form.controls["estado"].value
    model.idRol = this.form.controls["rol"].value

    console.log(model);

    this.service.EditRecord(model).subscribe({
      next: (data: UserModel) => {
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/security/list-users'])
      },
      error: (err: any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }
}
