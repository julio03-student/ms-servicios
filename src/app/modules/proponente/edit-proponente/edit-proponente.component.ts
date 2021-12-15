import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { UploadedFileModel } from 'src/app/models/upload.file.model';
import { DepartamentoService } from 'src/app/services/parametros/departamentos.service';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const OpenGeneralMessage: any
declare const InitSelectById: any;

@Component({
  selector: 'app-edit-proponente',
  templateUrl: './edit-proponente.component.html',
  styleUrls: ['./edit-proponente.component.css']
})
export class EditProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  vinculacionList: TipoVinculacionModel[] = []
  departamentolist: DepartamentoModel[] = []
  uploadForm: FormGroup = this.fb.group({});
  url: string = GeneralData.BUSINESS_ADMIN_URL
  uploadedFilename?: string = ""
  uploadedFile: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private activeRoute: ActivatedRoute,
    private vinculacionService: TipoVinculacionService,
    private departamentoservice: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.GetOptionsToSelects()
    this.SearchRecord()
    this.CreateFormFile()
  }

  CreateForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      otros_nombres: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      email: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      fecha_nacimiento: ["", [Validators.required]],
      id_vinculacion: ["", [Validators.required]],
      id_departamento: ["", [Validators.required]],
      image: ["", [Validators.required]],
    })
  }

  SearchRecord() {
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        this.form.controls["id"].setValue(data.IdProponente)
        this.form.controls["name"].setValue(data.PrimerNombreProponente)
        this.form.controls["otros_nombres"].setValue(data.OtrosNombresProponente)
        this.form.controls["last_name"].setValue(data.ApellidosProponente)
        this.form.controls["email"].setValue(data.CorreoProponente)
        this.form.controls["direccion"].setValue(data.Direccion)
        this.form.controls["documento"].setValue(data.DocumentoIdProponente)
        this.form.controls["phone"].setValue(data.CelularProponente)
        this.form.controls["fecha_nacimiento"].setValue(data.fechaNacimiento)
        this.form.controls["id_vinculacion"].setValue(data.IdTipoVinculacion)
        this.form.controls["id_departamento"].setValue(data.IdDepartamento)
        this.uploadForm.controls["file"].setValue(`${this.url}//archivo/1/${data.image}`)
      }
    })
  }

  CreateFormFile() {
    this.uploadForm = this.fb.group({
      file: ['', [Validators.required]],
    });

  }

  SaveRecord() {
    let model = new ProponenteModel();
    model.IdProponente = this.form.controls["id"].value
    model.PrimerNombreProponente = this.form.controls["name"].value;
    model.OtrosNombresProponente = this.form.controls["otros_nombres"].value
    model.ApellidosProponente = this.form.controls['last_name'].value
    model.CorreoProponente = this.form.controls["email"].value
    model.Direccion = this.form.controls["direccion"].value
    model.DocumentoIdProponente = this.form.controls["documento"].value
    model.CelularProponente = this.form.controls["phone"].value
    model.fechaNacimiento = this.form.controls["fecha_nacimiento"].value
    model.IdTipoVinculacion = parseInt(this.form.controls["id_vinculacion"].value)
    model.IdDepartamento = parseInt(this.form.controls["id_departamento"].value)
    model.image = this.form.controls["image"].value;

    console.log(model);

    this.service.EditRecord(model).subscribe({
      next: (data: ProponenteModel) => {
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/proponente/list-proponentes'])
      },
      error: (err: any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

  GetOptionsToSelects() {
    this.vinculacionService.GetRecordList().subscribe(
      {
        next: (data: TipoVinculacionModel[]) => {
          console.log("data: " + data)
          this.vinculacionList = data;
          setTimeout(() => {
            InitSelectById("selVinculacion");
          }, 100);
        }
      }
    ),
    this.departamentoservice.GetRecordList().subscribe(
      {
        next: (data: DepartamentoModel[]) => {
          //console.log("data: " + data)
          this.departamentolist = data;
          setTimeout(() => {
            InitSelectById("selDepartamento");
          }, 100);
        }
      }
    );
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
