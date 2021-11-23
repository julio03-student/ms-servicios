import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstadoSolicitudComponent } from './create-estado-solicitud.component';

describe('CreateEstadoSolicitudComponent', () => {
  let component: CreateEstadoSolicitudComponent;
  let fixture: ComponentFixture<CreateEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEstadoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
