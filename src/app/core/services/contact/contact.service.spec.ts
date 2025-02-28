import {TestBed} from '@angular/core/testing';

import {ContactService} from './contact.service';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
