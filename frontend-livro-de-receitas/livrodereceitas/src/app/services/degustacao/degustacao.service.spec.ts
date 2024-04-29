import { TestBed } from '@angular/core/testing';

import { DegustacaoService } from './degustacao.service';

describe('DegustacaoService', () => {
  let service: DegustacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegustacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
