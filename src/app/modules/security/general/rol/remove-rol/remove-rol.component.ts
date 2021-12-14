import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol.model';
import { RolesService } from 'src/app/services/parametros/roles.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-rol',
  templateUrl: './remove-rol.component.html',
  styleUrls: ['./remove-rol.component.css']
})
export class RemoveRolComponent implements OnInit {

  id: string = ""
  name: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: RolesService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando...."+this.activeRoute.snapshot.params["id"])
    let id = this.activeRoute.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: RolModel) => {
        if(data._idRol && data.nombreRol){
          this.id = data._idRol
          this.name = data.nombreRol
        }
      }
    })
  }
  
  
  RemoveRecord(){
    console.log(this.id)
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: RolModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/security/list-roles'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
