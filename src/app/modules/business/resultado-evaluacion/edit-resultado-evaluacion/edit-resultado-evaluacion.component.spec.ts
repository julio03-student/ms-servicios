import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResultadoEvaluacionComponent } from './edit-resultado-evaluacion.component';

describe('EditResultadoEvaluacionComponent', () => {
  let component: EditResultadoEvaluacionComponent;
  let fixture: ComponentFixture<EditResultadoEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResultadoEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResultadoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
