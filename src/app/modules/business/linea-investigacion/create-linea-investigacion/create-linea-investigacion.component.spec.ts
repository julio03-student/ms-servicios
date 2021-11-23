import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLineaInvestigacionComponent } from './create-linea-investigacion.component';

describe('CreateLineaInvestigacionComponent', () => {
  let component: CreateLineaInvestigacionComponent;
  let fixture: ComponentFixture<CreateLineaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLineaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLineaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
