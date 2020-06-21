import { TestBed } from '@angular/core/testing';

import { UserFlowService } from './user-flow.service';

describe('UserFlowService', () => {
  let service: UserFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
