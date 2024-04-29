import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDegustacoesComponent } from './visualizar-degustacoes.component';

describe('VisualizarDegustacoesComponent', () => {
  let component: VisualizarDegustacoesComponent;
  let fixture: ComponentFixture<VisualizarDegustacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarDegustacoesComponent]
    });
    fixture = TestBed.createComponent(VisualizarDegustacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
