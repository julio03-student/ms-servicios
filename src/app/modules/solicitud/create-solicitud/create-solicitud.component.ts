import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { UploadedFileModel } from 'src/app/models/upload.file.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';

declare const OpenGeneralMessage: any
declare const InitSelectById: any;

@Component({
  selector: 'app-create-solicitud',
  templateUrl: './create-solicitud.component.html',
  styleUrls: ['./create-solicitud.component.css']
})
export class CreateSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  modalidadList: ModalidadModel[] = []
  estadoList: EstadoSolicitudModel[] = []
  tipoSolicitudList: TipoSolicitud[] = []
  lineaInvestigacionList: LineaInvestigacionModel[] = []
  invitacionEvaluarList: InvitacionEvaluarModel[] = []
  proponentesList: ProponenteModel[] = []
  uploadForm: FormGroup = this.fb.group({});
  url: string = GeneralData.BUSINESS_ADMIN_URL
  uploadedFilename?: string = ""
  uploadedFile: boolean = false


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private modalidadService: ModalidadService,
    private estadosSolicitudService: EstadosSolicitudService,
    private lineasInvestigacionService: LineaInvestigacionService,
    private invitacionEvaluarService: InvitacionEvaluarService,
    private tipoSolicitudService: TipoSolicitudService,
    private proponenteService: ProponenteService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.GetOptionsToSelects()
    this.CreateFormFile()
  }

  CreateFormFile() {
    this.uploadForm = this.fb.group({
      file: ['', [Validators.required]],
    });

  }

  CreateForm(){
    this.form = this.fb.group({
      fecha_solicitud:["",[Validators.required]],
      nombre_trabajo:["",[Validators.required]],
      file:["",[Validators.required]],
      descripcion_general:["",[Validators.required]],
      id_modalidad:[[Validators.required]],
      id_estado:[[Validators.required]],
      id_tipo_solicitud:[[Validators.required]],
      id_linea_investigacion:[[Validators.required]],
      id_invitacion_evaluar:[[Validators.required]],
      id_proponente: [[Validators.required]]
    })
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.FechaSolicitud = this.form.controls["fecha_solicitud"].value;
    model.NombreTrabajoSolicitud = this.form.controls["nombre_trabajo"].value
    model.ArchivoSolicitud = this.form.controls['file'].value
    model.DescripcionGeneralSolicitud = this.form.controls["descripcion_general"].value 
    model.IdModalidad = parseInt(this.form.controls["id_modalidad"].value);
    model.IdEstado = parseInt(this.form.controls["id_estado"].value);
    model.IdLineaInvestigacion = parseInt(this.form.controls["id_linea_investigacion"].value);
    model.IdInvitacionEvaluar = parseInt(this.form.controls["id_invitacion_evaluar"].value);
    model.IdTipoSolicitud = parseInt(this.form.controls["id_tipo_solicitud"].value)
    model.IdProponente = parseInt(this.form.controls["id_proponente"].value)
    console.log(model);
    
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/solicitud/list-solicitudes'])
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
  UploadFile() {
    const formData = new FormData()
    formData.append("file", this.fgUpload["file"].value)
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        this.form.controls["file"].setValue(data.filename)
        this.uploadedFilename = data.filename
        this.uploadedFile = true
      }
    })
  }

  GetOptionsToSelects() {
    this.modalidadService.GetRecordList().subscribe(
      {
        next: (data: ModalidadModel[]) => {
          console.log("data: " + data)
          this.modalidadList = data;
          setTimeout(() => {
            InitSelectById("selModalidades");
          }, 100);
        }
      }
    );

    this.estadosSolicitudService.GetRecordList().subscribe(
      {
        next: (data: EstadoSolicitudModel[]) => {
          this.estadoList = data;
          setTimeout(() => {
            InitSelectById("selEstadoSolicitudes");
          }, 100);
        }
      }
    );

    this.tipoSolicitudService.GetRecordList().subscribe(
      {
        next: (data: TipoSolicitud[]) => {
          this.tipoSolicitudList = data;
          setTimeout(() => {
            InitSelectById("selTipoSolicitud");
          }, 100);
        }
      }
    );

    this.lineasInvestigacionService.GetRecordList().subscribe(
      {
        next: (data: LineaInvestigacionModel[]) => {
          this.lineaInvestigacionList = data;
          setTimeout(() => {
            InitSelectById("selLineaInvestigacion");
          }, 100);
        }
      }
    );

    this.invitacionEvaluarService.GetRecordList().subscribe(
      {
        next: (data: InvitacionEvaluarModel[]) => {
          this.invitacionEvaluarList = data;
          setTimeout(() => {
            InitSelectById("selInvitacionEvaluar");
          }, 100);
        }
      }
    );

    this.proponenteService.GetRecordList().subscribe(
      {
        next: (data: ProponenteModel[]) => {
          this.proponentesList = data;
          setTimeout(() => {
            InitSelectById("selProponente");
          }, 100)
        }
      }
    )
  }

}
