import { TestBed, inject } from '@angular/core/testing';

import { CarpartService } from './carpart.service';

describe('CarpartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarpartService]
    });
  });

  it('should be created', inject([CarpartService], (service: CarpartService) => {
    expect(service).toBeTruthy();
  }));
});
