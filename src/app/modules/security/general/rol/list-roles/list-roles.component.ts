import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol.model';
import { RolesService } from 'src/app/services/parametros/roles.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  rollist: RolModel[] = []

  constructor(
    private rolservice: RolesService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.rolservice.GetRecordList().subscribe({
      next: (data: RolModel[]) =>{
        console.log("Lista: "+data)
        this.rollist = data
        this.total = this.rollist.length
      }
    })
  }
}
