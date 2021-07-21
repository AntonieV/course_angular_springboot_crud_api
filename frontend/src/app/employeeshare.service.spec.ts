import { TestBed } from '@angular/core/testing';

import { EmployeeshareService } from './employeeshare.service';

describe('EmployeeshareService', () => {
  let service: EmployeeshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
