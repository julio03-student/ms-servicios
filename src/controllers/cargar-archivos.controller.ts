import {inject} from '@loopback/core'
import {repository} from '@loopback/repository'
import {
  HttpErrors,
  param,
  post,
  Request,
  requestBody,
  Response,
  RestBindings
} from '@loopback/rest'
import multer from 'multer'
import path from 'path'
import {Keys as llaves} from '../config/keys'
import {Imagen} from '../models'
import {ImagenRepository} from '../repositories'

export class CargarArchivosController {
  constructor(
    @repository(ImagenRepository)
    private imagenRepository: ImagenRepository
  ) { }


  /**
   *
   * @param response
   * @param request
  */

  @post('/CargarImagen', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga de imágenes.',
      },
    },
  })
  async cargarImagen(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody.file() request: Request,
  ): Promise<object | false> {
    const rutaImagen = path.join(__dirname, llaves.carpetaImagen);
    let res = await this.StoreFileToPath(rutaImagen, llaves.nombreCampoImagen, request, response, llaves.extensionesPermitidasIMG);
    if (res) {
      const nombre_archivo = response.req?.file?.filename;
      if (nombre_archivo) {
        return {filename: nombre_archivo};
      }
    }
    return res;
  }

  @post('/CargarImagenProponente/{idJurado}', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga de imágenes de los jurados.',
      },
    },
  })
  async cargarImagenJurado(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody.file() request: Request,
    @param.path.number('idJurado') idJurado: number
  ): Promise<object | false> {
    const rutaImagen = path.join(__dirname, llaves.carpetaImagen);
    let res = await this.StoreFileToPath(rutaImagen, llaves.nombreCampoImagen, request, response, llaves.extensionesPermitidasIMG);
    if (res) {
      const nombre_archivo = response.req?.file?.filename;
      if (nombre_archivo) {
        let img = new Imagen();
        img.nombreImagen = nombre_archivo;
        img.IdProponente = idJurado;
        await this.imagenRepository.save(img)
        return {filename: nombre_archivo};
      }
    }
    return res;
  }

  @post('/CargarImagenProponente/{idProponente}', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga de imágenes de los proponentes.',
      },
    },
  })
  async cargarImagenProponente(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody.file() request: Request,
    @param.path.number('idProponente') idProponente: number
  ): Promise<object | false> {
    const rutaImagen = path.join(__dirname, llaves.carpetaImagen);
    let res = await this.StoreFileToPath(rutaImagen, llaves.nombreCampoImagen, request, response, llaves.extensionesPermitidasIMG);
    if (res) {
      const nombre_archivo = response.req?.file?.filename;
      if (nombre_archivo) {
        let img = new Imagen();
        img.nombreImagen = nombre_archivo;
        img.IdProponente = idProponente;
        await this.imagenRepository.save(img)
        return {filename: nombre_archivo};
      }
    }
    return res;
  }

  @post('/CargarDocumento', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga de documentos',
      },
    },
  })
  async cargarDocumento(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody.file() request: Request,
  ): Promise<object | false> {
    const rutaDocumento = path.join(__dirname, llaves.carpetaDocumento);
    let res = await this.StoreFileToPath(rutaDocumento, llaves.nombreCampoDocumento, request, response, llaves.extensionesPermitidasDOC);
    if (res) {
      const nombre_archivo = response.req?.file?.filename;
      if (nombre_archivo) {
        return {filename: nombre_archivo};
      }
    }
    return res;
  }

  /**
   * Return a config for multer storage
   * @param path
   */
  private GetMulterStorageConfig(path: string) {
    var filename: string = '';
    const storage = multer.diskStorage({
      destination: function (req: any, file: any, cb: any) {
        cb(null, path)
      },
      filename: function (req: any, file: any, cb: any) {
        filename = `${Date.now()}-${file.originalname}`
        cb(null, filename);
      }
    });
    return storage;
  }

  /**
   * store the file in a specific path
   * @param storePath
   * @param request
   * @param response
   */
  private StoreFileToPath(storePath: string, fieldname: string, request: Request, response: Response, acceptedExt: string[]): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      const storage = this.GetMulterStorageConfig(storePath);
      const upload = multer({
        storage: storage,
        fileFilter: function (req: any, file: any, callback: any) {
          var ext = path.extname(file.originalname).toUpperCase();
          if (acceptedExt.includes(ext)) {
            return callback(null, true);
          }
          return callback(new HttpErrors[400]('El formato del archivo no es permitido.'));
        },
        limits: {
          fileSize: llaves.tamMaxImagen
        }
      },
      ).single(fieldname);
      upload(request, response, (err: any) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

}



