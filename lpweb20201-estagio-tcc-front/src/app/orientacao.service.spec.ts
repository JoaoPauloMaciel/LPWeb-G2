import { TestBed } from '@angular/core/testing';

import { OrientacaoService } from './orientacao.service';

describe('OrientacaoService', () => {
  let service: OrientacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrientacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
