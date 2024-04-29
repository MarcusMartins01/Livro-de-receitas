import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirReceitaComponent } from './inserir-receita.component';

describe('InserirReceitaComponent', () => {
  let component: InserirReceitaComponent;
  let fixture: ComponentFixture<InserirReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirReceitaComponent]
    });
    fixture = TestBed.createComponent(InserirReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
