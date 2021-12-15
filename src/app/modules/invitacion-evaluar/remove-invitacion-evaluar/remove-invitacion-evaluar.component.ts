import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-invitacionEvaluar',
  templateUrl: './remove-invitacion-evaluar.component.html',
  styleUrls: ['./remove-invitacion-evaluar.component.css']
})
export class RemoveInvitacionEvaluarComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  
  id: number = 0
  constructor(
    private router: Router,
    private service: InvitacionEvaluarService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        if(data.IdInvitacionEvaluar){
          this.id = data.IdInvitacionEvaluar
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: InvitacionEvaluarModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/invitacionEvaluar/list-invitacionesEvaluar'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}
