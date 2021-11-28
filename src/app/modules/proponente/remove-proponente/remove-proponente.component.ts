import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-proponente',
  templateUrl: './remove-proponente.component.html',
  styleUrls: ['./remove-proponente.component.css']
})
export class RemoveProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  
  id: number = 0
  name: string = ""
  constructor(
    private router: Router,
    private service: ProponenteService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        if(data.IdProponente && data.PrimerNombreProponente){
          this.id = data.IdProponente
          this.name = data.PrimerNombreProponente+""+data.ApellidosProponente
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: ProponenteModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/proponente/list-proponentes'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}