import { TestBed } from '@angular/core/testing';

import { ResultadosEvaluacionService } from './resultados-evaluacion.service';

describe('ResultadosEvaluacionService', () => {
  let service: ResultadosEvaluacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosEvaluacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
