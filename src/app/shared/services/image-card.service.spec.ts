import { TestBed } from '@angular/core/testing';

import { ImageCardService } from './image-card.service';

describe('ImageCardService', () => {
  let service: ImageCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
