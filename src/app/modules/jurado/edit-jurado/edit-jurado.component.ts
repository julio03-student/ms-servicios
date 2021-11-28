import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-edit-jurado',
  templateUrl: './edit-jurado.component.html',
  styleUrls: ['./edit-jurado.component.css']
})
export class EditJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.SearchRecord()
  }

  CreateForm(){
    this.form = this.fb.group({
      id: ["",[Validators.required]],
      name:["",[Validators.required]],
      last_name:["",[Validators.required]],
      phone:["",[Validators.required]],
      documento:["",[Validators.required]],
      email:["",[Validators.required]],
      direccion:["",[Validators.required]],
      fecha_nacimiento:["",[Validators.required]],
      vinculacion:["",[Validators.required]],
    })
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        this.form.controls["id"].setValue(data.IdJurado)
        this.form.controls["name"].setValue(data.NombreJurado)
        this.form.controls["last_name"].setValue(data.ApellidosJurado)
        this.form.controls["email"].setValue(data.CorreoJurado)
        this.form.controls["direccion"].setValue(data.DireccionJurado)
        this.form.controls["documento"].setValue(data.DocumentoJurado)
        this.form.controls["phone"].setValue(data.TelefonoJurado)
        this.form.controls["vinculacion"].setValue(data.VinculacionJurado)
        this.form.controls["fecha_nacimiento"].setValue(data.fechaNacimiento)
      }
    })
  }

  SaveRecord(){
    let model = new JuradoModel();
    model.IdJurado = this.form.controls["id"].value
    model.NombreJurado = this.form.controls["name"].value;
    model.ApellidosJurado = this.form.controls['last_name'].value
    model.CorreoJurado = this.form.controls["email"].value
    model.DireccionJurado = this.form.controls["direccion"].value
    model.DocumentoJurado = this.form.controls["documento"].value
    model.TelefonoJurado = this.form.controls["phone"].value
    model.VinculacionJurado = this.form.controls["vinculacion"].value
    model.fechaNacimiento = this.form.controls["fecha_nacimiento"].value

    console.log(model);
    
    this.service.EditRecord(model).subscribe({
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
