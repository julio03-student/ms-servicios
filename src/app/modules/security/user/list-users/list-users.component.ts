import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/models/user-data-model';
import { UsuariosService } from 'src/app/services/parametros/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  userList: UserModel[] = []

  constructor(
    private userService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.userService.GetRecordList().subscribe({
      next: (data: UserModel[]) =>{
        console.log("Lista: "+data)
        this.userList = data
        this.total = this.userList.length
      }
    })
  }

}
