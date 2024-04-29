import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCargoComponent } from './inserir-cargo.component';

describe('InserirCargoComponent', () => {
  let component: InserirCargoComponent;
  let fixture: ComponentFixture<InserirCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirCargoComponent]
    });
    fixture = TestBed.createComponent(InserirCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
