import { ComiteModel } from "./comite.model";
import { ProponenteModel } from "./proponente.model";

export class SolicitudModel{
    IdSolicitud?: number;
    FechaSolicitud?: Date;
    NombreTrabajoSolicitud?: string;
    ArchivoSolicitud?: string;
    DescripcionGeneralSolicitud?: string;
    IdModalidad?: number;
    IdEstado?: number;
    IdTipoSolicitud?: number;
    IdLineaInvestigacion?: number;
    IdInvitacionEvaluar?: number;
    proponentes?: ProponenteModel[];
    comites?: ComiteModel[];
}