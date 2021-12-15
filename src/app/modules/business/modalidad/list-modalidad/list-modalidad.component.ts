import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';

@Component({
  selector: 'app-list-modalidad',
  templateUrl: './list-modalidad.component.html',
  styleUrls: ['./list-modalidad.component.css']
})
export class ListModalidadComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  modalidadList: ModalidadModel[] = []

  constructor(
    private modalidadService: ModalidadService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.modalidadService.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) =>{
        console.log("Lista: "+data)
        this.modalidadList = data
        this.total = this.modalidadList.length
      }
    })
  }

}
