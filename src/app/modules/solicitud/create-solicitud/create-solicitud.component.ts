import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';
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


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private modalidadService: ModalidadService,
    private estadosSolicitudService: EstadosSolicitudService,
    private lineasInvestigacionService: LineaInvestigacionService,
    private invitacionEvaluarService: InvitacionEvaluarService,
    private tipoSolicitudService: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
    this.GetOptionsToSelects()
  }

  CreateForm(){
    this.form = this.fb.group({
      fecha_solicitud:["",[Validators.required]],
      nombre_trabajo:["",[Validators.required]],
      archivo_solicitud:["",[Validators.required]],
      descripcion_general:["",[Validators.required]],
      id_modalidad:[[Validators.required]],
      id_estado:[[Validators.required]],
      id_tipo_solicitud:[[Validators.required]],
      id_linea_investigacion:[[Validators.required]],
      id_invitacion_evaluar:[[Validators.required]],
    })
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.FechaSolicitud = this.form.controls["fecha_solicitud"].value;
    model.NombreTrabajoSolicitud = this.form.controls["nombre_trabajo"].value
    model.ArchivoSolicitud = this.form.controls['archivo_solicitud'].value
    model.DescripcionGeneralSolicitud = this.form.controls["descripcion_general"].value 
    model.IdModalidad = parseInt(this.form.controls["id_modalidad"].value);
    model.IdEstado = parseInt(this.form.controls["id_estado"].value);
    model.IdLineaInvestigacion = parseInt(this.form.controls["id_linea_investigacion"].value);
    model.IdInvitacionEvaluar = parseInt(this.form.controls["id_invitacion_evaluar"].value);
    model.IdTipoSolicitud = parseInt(this.form.controls["id_tipo_solicitud"].value)
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
  }

}
