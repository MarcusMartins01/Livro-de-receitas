import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasprontasComponent } from './receitasprontas.component';

describe('ReceitasprontasComponent', () => {
  let component: ReceitasprontasComponent;
  let fixture: ComponentFixture<ReceitasprontasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasprontasComponent]
    });
    fixture = TestBed.createComponent(ReceitasprontasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
