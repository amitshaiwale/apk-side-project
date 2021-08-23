import { TestBed } from '@angular/core/testing';

import { PriceCalculationsService } from './price-calculations.service';

describe('PriceCalculationsService', () => {
  let service: PriceCalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceCalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
