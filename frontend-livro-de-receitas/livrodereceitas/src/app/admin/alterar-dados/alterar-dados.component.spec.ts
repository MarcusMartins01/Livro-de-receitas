import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarDadosComponent } from './alterar-dados.component';

describe('AlterarDadosComponent', () => {
  let component: AlterarDadosComponent;
  let fixture: ComponentFixture<AlterarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarDadosComponent]
    });
    fixture = TestBed.createComponent(AlterarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
