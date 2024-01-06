/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SesionService } from './sesion.service';

describe('Service: Sesion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SesionService]
    });
  });

  it('should ...', inject([SesionService], (service: SesionService) => {
    expect(service).toBeTruthy();
  }));
});
