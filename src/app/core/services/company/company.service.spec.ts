import {TestBed} from '@angular/core/testing';

import {CompanyService} from './company.service';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
