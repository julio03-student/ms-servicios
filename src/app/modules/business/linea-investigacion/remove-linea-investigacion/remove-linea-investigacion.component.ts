import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parametros/linea-investigacion.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-linea-investigacion',
  templateUrl: './remove-linea-investigacion.component.html',
  styleUrls: ['./remove-linea-investigacion.component.css']
})
export class RemoveLineaInvestigacionComponent implements OnInit {

  id: number = 0
  name: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: LineaInvestigacionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        if(data.IdLineaInvestigacion && data.NombreLineaInvestigacion){
          this.id = data.IdLineaInvestigacion
          this.name = data.NombreLineaInvestigacion
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: LineaInvestigacionModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-lineasInvestigacion'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
