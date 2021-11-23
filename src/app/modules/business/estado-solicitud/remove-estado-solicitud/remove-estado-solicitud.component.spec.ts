import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEstadoSolicitudComponent } from './remove-estado-solicitud.component';

describe('RemoveEstadoSolicitudComponent', () => {
  let component: RemoveEstadoSolicitudComponent;
  let fixture: ComponentFixture<RemoveEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveEstadoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
