import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLineaInvestigacionComponent } from './remove-linea-investigacion.component';

describe('RemoveLineaInvestigacionComponent', () => {
  let component: RemoveLineaInvestigacionComponent;
  let fixture: ComponentFixture<RemoveLineaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLineaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLineaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
