export namespace Keys{
  export const carpetaImagen = "../../archivos/imagenes/"
  export const nombreCampoImagen = 'file'
  export const extensionesPermitidasIMG: string[] = ['.PNG', '.JPG', '.JPEG', '.SVG']
  export const tamMaxImagen = 1024 * 1024
  export const carpetaDocumento = '../../archivos/documentos'
  export const nombreCampoDocumento = 'file'
  export const extensionesPermitidasDOC: string[] = ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX']
  export const urlValidarToken = "http://localhost:3004/validar-token"
  export const rolAdmin = "6180945c19782f27f0016928"
  export const argToken = "token"
  export const argRolValidar = "rol"
  export const urlUsuarios = "http://localhost:3002/usuarios"
  export const urlInvitacion = 'http://localhost:3002/enviar-correo'
}
