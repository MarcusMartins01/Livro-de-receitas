import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirRestauranteComponent } from './inserir-restaurante.component';

describe('InserirRestauranteComponent', () => {
  let component: InserirRestauranteComponent;
  let fixture: ComponentFixture<InserirRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirRestauranteComponent]
    });
    fixture = TestBed.createComponent(InserirRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
