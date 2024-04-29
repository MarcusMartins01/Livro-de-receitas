import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasIneditasComponent } from './receitas-ineditas.component';

describe('ReceitasIneditasComponent', () => {
  let component: ReceitasIneditasComponent;
  let fixture: ComponentFixture<ReceitasIneditasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasIneditasComponent]
    });
    fixture = TestBed.createComponent(ReceitasIneditasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
