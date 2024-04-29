import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDegustacaoComponent } from './visualizar-degustacao.component';

describe('VisualizarDegustacaoComponent', () => {
  let component: VisualizarDegustacaoComponent;
  let fixture: ComponentFixture<VisualizarDegustacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarDegustacaoComponent]
    });
    fixture = TestBed.createComponent(VisualizarDegustacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
