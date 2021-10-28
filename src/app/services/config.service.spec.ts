import { TestBed } from '@angular/core/testing';

import { ConfigStore } from 'src/app/stores/config.store';

describe('ConfigService', () => {
  let service: ConfigStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
