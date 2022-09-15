import { TestBed } from '@angular/core/testing';

import { TarefeiroApiService } from './tarefeiro-api.service';

describe('TarefeiroApiService', () => {
  let service: TarefeiroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefeiroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
