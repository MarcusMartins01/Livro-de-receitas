import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosLivroComponent } from './relatorios-livro.component';

describe('RelatoriosLivroComponent', () => {
  let component: RelatoriosLivroComponent;
  let fixture: ComponentFixture<RelatoriosLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosLivroComponent]
    });
    fixture = TestBed.createComponent(RelatoriosLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
