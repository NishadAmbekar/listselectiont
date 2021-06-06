import { TestBed } from '@angular/core/testing';

import { CustomHttpService } from './custom-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomHttpService', () => {
  let service: CustomHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
