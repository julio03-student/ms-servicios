import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

@Component({
  selector: 'app-list-facultad',
  templateUrl: './list-facultad.component.html',
  styleUrls: ['./list-facultad.component.css']
})
export class ListFacultadComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  facultadList: FacultadModel[] = []

  constructor(
    private facultadService: FacultadService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.facultadService.GetRecordList().subscribe({
      next: (data: FacultadModel[]) =>{
        console.log("Lista: "+data)
        this.facultadList = data
        this.total = this.facultadList.length
      }
    })
  }
}
