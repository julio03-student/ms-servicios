import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoSolicitudComponent } from './list-tipo-solicitud.component';

describe('ListTipoSolicitudComponent', () => {
  let component: ListTipoSolicitudComponent;
  let fixture: ComponentFixture<ListTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
