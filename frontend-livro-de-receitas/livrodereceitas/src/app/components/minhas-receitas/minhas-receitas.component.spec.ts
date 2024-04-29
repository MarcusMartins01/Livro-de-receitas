import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasReceitasComponent } from './minhas-receitas.component';

describe('MinhasReceitasComponent', () => {
  let component: MinhasReceitasComponent;
  let fixture: ComponentFixture<MinhasReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhasReceitasComponent]
    });
    fixture = TestBed.createComponent(MinhasReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
