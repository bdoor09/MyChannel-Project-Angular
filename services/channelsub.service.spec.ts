import { TestBed } from '@angular/core/testing';

import { ChannelsubService } from './channelsub.service';

describe('ChannelsubService', () => {
  let service: ChannelsubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelsubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
