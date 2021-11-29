import { Component, OnInit } from '@angular/core';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamentos.service';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class ListDepartamentoComponent implements OnInit {

  departamentolist: DepartamentoModel[] = []

  constructor(
    private departamentoservice: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.departamentoservice.GetRecordList().subscribe({
      next: (data: DepartamentoModel[]) =>{
        console.log("Lista: "+data)
        this.departamentolist = data
      }
    })
  }
}
