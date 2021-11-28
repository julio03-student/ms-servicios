import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-jurado',
  templateUrl: './remove-jurado.component.html',
  styleUrls: ['./remove-jurado.component.css']
})
export class RemoveJuradoComponent implements OnInit {

  form : FormGroup = new FormGroup({})
  
  id: number = 0
  name: string = ""
  constructor(
    private router: Router,
    private service: JuradoService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        if(data.IdJurado && data.NombreJurado){
          this.id = data.IdJurado
          this.name = data.NombreJurado+""+data.ApellidosJurado
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: JuradoModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/jurado/list-jurados'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}
