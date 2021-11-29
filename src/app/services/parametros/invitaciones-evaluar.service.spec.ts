import { TestBed } from '@angular/core/testing';

import { InvitacionEvaluarService } from './invitaciones-evaluar.service';

describe('InvitacionesEvaluarService', () => {
  let service: InvitacionEvaluarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitacionEvaluarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
