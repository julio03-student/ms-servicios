import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveResultadoEvaluacionComponent } from './remove-resultado-evaluacion.component';

describe('RemoveResultadoEvaluacionComponent', () => {
  let component: RemoveResultadoEvaluacionComponent;
  let fixture: ComponentFixture<RemoveResultadoEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveResultadoEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveResultadoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
