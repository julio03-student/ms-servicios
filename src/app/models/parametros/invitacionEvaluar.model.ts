import { SolicitudModel } from "./solicitud.model";

export class InvitacionEvaluarModel{
    IdInvitacionEvaluar?: number;
    FechaInvitacion?: Date;
    FechaRespuesta?: Date;
    EstadoInvitacion?: string;
    ObservacionesInvitacionEvaluar?: string;
    IdJurado?: number;
    IdRecordatorio?: number;
    solicitudes?: SolicitudModel[];
    /* resultadoEvaluacions: ResultadoEvaluacion[]; */
}