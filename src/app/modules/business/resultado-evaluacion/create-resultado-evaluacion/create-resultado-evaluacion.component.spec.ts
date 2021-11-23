import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResultadoEvaluacionComponent } from './create-resultado-evaluacion.component';

describe('CreateResultadoEvaluacionComponent', () => {
  let component: CreateResultadoEvaluacionComponent;
  let fixture: ComponentFixture<CreateResultadoEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResultadoEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResultadoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
