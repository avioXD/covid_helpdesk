import { TestBed } from '@angular/core/testing';

import { EditPostsService } from './edit-posts.service';

describe('EditPostsService', () => {
  let service: EditPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
