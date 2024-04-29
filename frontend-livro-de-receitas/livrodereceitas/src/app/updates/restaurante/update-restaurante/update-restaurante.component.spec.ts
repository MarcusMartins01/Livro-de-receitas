import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestauranteComponent } from './update-restaurante.component';

describe('UpdateRestauranteComponent', () => {
  let component: UpdateRestauranteComponent;
  let fixture: ComponentFixture<UpdateRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRestauranteComponent]
    });
    fixture = TestBed.createComponent(UpdateRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
