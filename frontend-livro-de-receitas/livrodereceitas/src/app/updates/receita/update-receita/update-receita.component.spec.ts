import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReceitaComponent } from './update-receita.component';

describe('UpdateReceitaComponent', () => {
  let component: UpdateReceitaComponent;
  let fixture: ComponentFixture<UpdateReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateReceitaComponent]
    });
    fixture = TestBed.createComponent(UpdateReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
