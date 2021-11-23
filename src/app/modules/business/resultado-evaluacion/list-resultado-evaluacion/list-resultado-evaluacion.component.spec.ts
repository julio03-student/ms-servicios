import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultadoEvaluacionComponent } from './list-resultado-evaluacion.component';

describe('ListResultadoEvaluacionComponent', () => {
  let component: ListResultadoEvaluacionComponent;
  let fixture: ComponentFixture<ListResultadoEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResultadoEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResultadoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
