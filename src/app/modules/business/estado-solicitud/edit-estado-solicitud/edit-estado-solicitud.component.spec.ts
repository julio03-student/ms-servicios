import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstadoSolicitudComponent } from './edit-estado-solicitud.component';

describe('EditEstadoSolicitudComponent', () => {
  let component: EditEstadoSolicitudComponent;
  let fixture: ComponentFixture<EditEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstadoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
