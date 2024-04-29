import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasdolivroComponent } from './receitasdolivro.component';

describe('ReceitasdolivroComponent', () => {
  let component: ReceitasdolivroComponent;
  let fixture: ComponentFixture<ReceitasdolivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasdolivroComponent]
    });
    fixture = TestBed.createComponent(ReceitasdolivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
