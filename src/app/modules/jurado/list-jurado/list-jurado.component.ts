import { Component, OnInit } from '@angular/core';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

@Component({
  selector: 'app-list-jurado',
  templateUrl: './list-jurado.component.html',
  styleUrls: ['./list-jurado.component.css']
})
export class ListJuradoComponent implements OnInit {

  juradoList: JuradoModel[] = []

  constructor(
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.juradoService.GetRecordList().subscribe({
      next: (data: JuradoModel[]) =>{
        console.log("Lista: "+data)
        this.juradoList = data
      }
    })
  }

}
