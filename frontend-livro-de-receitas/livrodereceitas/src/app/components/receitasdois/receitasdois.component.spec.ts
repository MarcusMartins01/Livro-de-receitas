import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasdoisComponent } from './receitasdois.component';

describe('ReceitasdoisComponent', () => {
  let component: ReceitasdoisComponent;
  let fixture: ComponentFixture<ReceitasdoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasdoisComponent]
    });
    fixture = TestBed.createComponent(ReceitasdoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
