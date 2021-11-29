import { Component, OnInit } from '@angular/core';
import { ComiteModel } from 'src/app/models/parametros/comite.model';
import { ComiteService } from 'src/app/services/parametros/comite.service';

@Component({
  selector: 'app-list-comite',
  templateUrl: './list-comite.component.html',
  styleUrls: ['./list-comite.component.css']
})
export class ListComiteComponent implements OnInit {

  comiteList: ComiteModel[] = []

  constructor(
    private modalidadService: ComiteService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.modalidadService.GetRecordList().subscribe({
      next: (data: ComiteModel[]) =>{
        console.log("Lista: "+data)
        this.comiteList = data
      }
    })
  }
}
