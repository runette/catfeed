import { TestBed } from '@angular/core/testing';

import { CfaDatabaseService } from './cfa-database.service';

describe('CfaDatabaseService', () => {
  let service: CfaDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfaDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
