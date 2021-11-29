import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parametros/comite.model';
import { ComiteService } from 'src/app/services/parametros/comite.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-create-comite',
  templateUrl: './create-comite.component.html',
  styleUrls: ['./create-comite.component.css']
})
export class CreateComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteService
  ) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    this.form = this.fb.group({
      name:["",[Validators.required]],
     
    })
  }

  SaveRecord(){
    let model = new ComiteModel();
    model.NombreComite = this.form.controls["name"].value;
    
    this.service.SaveRecord(model).subscribe({
      next: (data: ComiteModel) =>{
        OpenGeneralMessage(GeneralData.SAVED_MESSAGE)
        this.router.navigate(['/business/list-comites'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.ERROR_MESSAGE)
      }
    })
  }

}
