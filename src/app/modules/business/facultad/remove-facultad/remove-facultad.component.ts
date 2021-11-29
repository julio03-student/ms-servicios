import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-facultad',
  templateUrl: './remove-facultad.component.html',
  styleUrls: ['./remove-facultad.component.css']
})
export class RemoveFacultadComponent implements OnInit {

  id: number = 0
  name: string = ""
  codigo: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service:FacultadService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        if(data.IdFacultad && data.NombreFacultad && data.CodigoFacultad){
          this.id = data.IdFacultad
          this.name = data.NombreFacultad
          this.codigo = data.CodigoFacultad
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: FacultadModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-facultades'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
