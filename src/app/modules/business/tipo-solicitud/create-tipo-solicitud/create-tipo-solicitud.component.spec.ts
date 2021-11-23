import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoSolicitudComponent } from './create-tipo-solicitud.component';

describe('CreateTipoSolicitudComponent', () => {
  let component: CreateTipoSolicitudComponent;
  let fixture: ComponentFixture<CreateTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
