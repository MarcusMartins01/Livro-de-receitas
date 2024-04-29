import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosReceitasComponent } from './relatorios-receitas.component';

describe('RelatoriosReceitasComponent', () => {
  let component: RelatoriosReceitasComponent;
  let fixture: ComponentFixture<RelatoriosReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosReceitasComponent]
    });
    fixture = TestBed.createComponent(RelatoriosReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
