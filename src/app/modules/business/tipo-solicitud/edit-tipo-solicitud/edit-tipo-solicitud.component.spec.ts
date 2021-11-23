import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoSolicitudComponent } from './edit-tipo-solicitud.component';

describe('EditTipoSolicitudComponent', () => {
  let component: EditTipoSolicitudComponent;
  let fixture: ComponentFixture<EditTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
