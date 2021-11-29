import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamentos.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-departamento',
  templateUrl: './remove-departamento.component.html',
  styleUrls: ['./remove-departamento.component.css']
})
export class RemoveDepartamentoComponent implements OnInit {

  id: number = 0
  name: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: DepartamentoService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        if(data.IdDepartamento && data.NombreDepartamento){
          this.id = data.IdDepartamento
          this.name = data.NombreDepartamento
        }
       
      }
    })
  }
  
  
  RemoveRecord(){
    console.log(this.id)
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: DepartamentoModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-departamentos'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
