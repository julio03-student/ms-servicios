import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSolicitudComponent } from './remove-solicitud.component';

describe('RemoveSolicitudComponent', () => {
  let component: RemoveSolicitudComponent;
  let fixture: ComponentFixture<RemoveSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
