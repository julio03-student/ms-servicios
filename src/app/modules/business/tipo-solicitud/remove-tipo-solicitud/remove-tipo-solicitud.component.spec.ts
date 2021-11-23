import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTipoSolicitudComponent } from './remove-tipo-solicitud.component';

describe('RemoveTipoSolicitudComponent', () => {
  let component: RemoveTipoSolicitudComponent;
  let fixture: ComponentFixture<RemoveTipoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTipoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTipoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
