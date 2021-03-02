import { TestBed } from '@angular/core/testing';

import { SearchUnsplashService } from './search-unsplash.service';

describe('SearchUnsplashService', () => {
  let service: SearchUnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
