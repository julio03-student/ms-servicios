import { Component, OnInit } from '@angular/core';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';

@Component({
  selector: 'app-list-modalidad',
  templateUrl: './list-modalidad.component.html',
  styleUrls: ['./list-modalidad.component.css']
})
export class ListModalidadComponent implements OnInit {

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
      }
    })
  }

}
