import { Component, OnInit } from '@angular/core';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';

@Component({
  selector: 'app-list-proponente',
  templateUrl: './list-proponente.component.html',
  styleUrls: ['./list-proponente.component.css']
})
export class ListProponenteComponent implements OnInit {

  proponentelist: ProponenteModel[] = []

  constructor(
    private proponenteservice: ProponenteService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.proponenteservice.GetRecordList().subscribe({
      next: (data: ProponenteModel[]) =>{
        console.log("Lista: "+data)
        this.proponentelist = data
      }
    })
  }

}