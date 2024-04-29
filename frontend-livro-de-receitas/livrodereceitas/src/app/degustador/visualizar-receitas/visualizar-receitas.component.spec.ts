import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarReceitasComponent } from './visualizar-receitas.component';

describe('VisualizarReceitasComponent', () => {
  let component: VisualizarReceitasComponent;
  let fixture: ComponentFixture<VisualizarReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarReceitasComponent]
    });
    fixture = TestBed.createComponent(VisualizarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
