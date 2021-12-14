import { TestBed } from '@angular/core/testing';

import { DesautenticacionGuard } from './desautenticacion.guard';

describe('DesautenticacionGuard', () => {
  let guard: DesautenticacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesautenticacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
