import { TestBed } from '@angular/core/testing';

import { ColaboradorExternoService } from './colaborador-externo.service';

describe('ColaboradorExternoService', () => {
  let service: ColaboradorExternoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaboradorExternoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
