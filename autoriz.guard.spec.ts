import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autorizGuard } from './autoriz.guard';

describe('autorizGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autorizGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
