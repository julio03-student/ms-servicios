import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { UploadedFileModel } from 'src/app/models/upload.file.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-jurado',
  templateUrl: './create-jurado.component.html',
  styleUrls: ['./create-jurado.component.css']
})
export class CreateJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  uploadForm: FormGroup = this.fb.group({});
  url: string = GeneralData.BUSINESS_ADMIN_URL
  uploadedFilename?: string = ""
  uploadedFile: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.CreateFormFile()
  }

  CreateFormFile() {
    this.uploadForm = this.fb.group({
      file: ['', [Validators.required]],
    });

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
      image: ["", [Validators.required]],
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
    model.image = this.form.controls["image"].value;

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

  onFileSelect(event: any) {

    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.fgUpload["file"].setValue(f);
    }
  }
  get fgUpload() {
    return this.uploadForm.controls;
  }
  UploadImage() {
    const formData = new FormData()
    formData.append("file", this.fgUpload["file"].value)
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        this.form.controls["image"].setValue(data.filename)
        this.uploadedFilename = data.filename
        this.uploadedFile = true
      }
    })
  }
}


