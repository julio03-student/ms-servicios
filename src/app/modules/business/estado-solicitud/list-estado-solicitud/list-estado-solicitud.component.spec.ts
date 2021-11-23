import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstadoSolicitudComponent } from './list-estado-solicitud.component';

describe('ListEstadoSolicitudComponent', () => {
  let component: ListEstadoSolicitudComponent;
  let fixture: ComponentFixture<ListEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstadoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
