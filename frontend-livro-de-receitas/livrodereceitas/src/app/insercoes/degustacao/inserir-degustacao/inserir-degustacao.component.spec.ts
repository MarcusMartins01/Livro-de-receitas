import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirDegustacaoComponent } from './inserir-degustacao.component';

describe('InserirDegustacaoComponent', () => {
  let component: InserirDegustacaoComponent;
  let fixture: ComponentFixture<InserirDegustacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirDegustacaoComponent]
    });
    fixture = TestBed.createComponent(InserirDegustacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
