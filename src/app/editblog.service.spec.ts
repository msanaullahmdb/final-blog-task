import { TestBed } from '@angular/core/testing';

import { EditblogService } from './editblog.service';

describe('EditblogService', () => {
  let service: EditblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
