import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLineaInvestigacionComponent } from './edit-linea-investigacion.component';

describe('EditLineaInvestigacionComponent', () => {
  let component: EditLineaInvestigacionComponent;
  let fixture: ComponentFixture<EditLineaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLineaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLineaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
