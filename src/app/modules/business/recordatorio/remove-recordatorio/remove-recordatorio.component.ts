import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { RecordatorioService } from 'src/app/services/parametros/recordatorio.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-recordatorio',
  templateUrl: './remove-recordatorio.component.html',
  styleUrls: ['./remove-recordatorio.component.css']
})
export class RemoveRecordatorioComponent implements OnInit {

  id: number = 0
  descripcion_recordatorio: string = "" 
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: RecordatorioService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: RecordatorioModel) => {
        if(data.IdRecordatorio && data.DescripcionRecordatorio){
          this.id = data.IdRecordatorio
          this.descripcion_recordatorio = data.DescripcionRecordatorio
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: RecordatorioModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-recordatorios'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}
