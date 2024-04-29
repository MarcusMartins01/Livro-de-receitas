import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCategoriaComponent } from './inserir-categoria.component';

describe('InserirCategoriaComponent', () => {
  let component: InserirCategoriaComponent;
  let fixture: ComponentFixture<InserirCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirCategoriaComponent]
    });
    fixture = TestBed.createComponent(InserirCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
