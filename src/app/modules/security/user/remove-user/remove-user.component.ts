import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/models/user-data-model';
import { UsuariosService } from 'src/app/services/parametros/users.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  id: string = ""
  name: string = ""
  apellidos: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: UsuariosService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando...."+this.activeRoute.snapshot.params["id"])
    let id = this.activeRoute.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: UserModel) => {
        if(data._idUsuario && data.nombresUsuario && data.apellidosUsuario){
          this.id = data._idUsuario
          this.name = data.nombresUsuario
          this.apellidos = data.apellidosUsuario
        }
      }
    })
  }
  
  
  RemoveRecord(){
    console.log(this.id)
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: UserModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/security/list-users'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
