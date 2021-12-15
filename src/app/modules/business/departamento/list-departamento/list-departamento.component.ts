import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamentos.service';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class ListDepartamentoComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
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
        this.total = this.departamentolist.length
      }
    })
  }
}
