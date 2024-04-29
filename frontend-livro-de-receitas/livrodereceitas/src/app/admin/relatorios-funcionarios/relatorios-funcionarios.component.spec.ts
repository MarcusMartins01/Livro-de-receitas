import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosFuncionariosComponent } from './relatorios-funcionarios.component';

describe('RelatoriosFuncionariosComponent', () => {
  let component: RelatoriosFuncionariosComponent;
  let fixture: ComponentFixture<RelatoriosFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosFuncionariosComponent]
    });
    fixture = TestBed.createComponent(RelatoriosFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
