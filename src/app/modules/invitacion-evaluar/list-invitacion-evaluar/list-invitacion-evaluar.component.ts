import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';

@Component({
  selector: 'app-list-invitacionEvaluar',
  templateUrl: './list-invitacion-evaluar.component.html',
  styleUrls: ['./list-invitacion-evaluar.component.css']
})
export class ListInvitacionEvaluarComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  invitacionesevaluarlist: InvitacionEvaluarModel[] = []

  constructor(
    private invitacionevaluarservice: InvitacionEvaluarService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.invitacionevaluarservice.GetRecordList().subscribe({
      next: (data: InvitacionEvaluarModel[]) =>{
        console.log("Lista: "+data)
        this.invitacionesevaluarlist = data
        this.total = this.invitacionesevaluarlist.length
      }
    })
  }

}