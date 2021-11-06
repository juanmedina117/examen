import { TestBed } from '@angular/core/testing';

import { ServicoReditService } from './servico-redit.service';

describe('ServicoReditService', () => {
  let service: ServicoReditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoReditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
