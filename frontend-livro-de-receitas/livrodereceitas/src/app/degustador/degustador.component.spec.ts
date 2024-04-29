import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegustadorComponent } from './degustador.component';

describe('DegustadorComponent', () => {
  let component: DegustadorComponent;
  let fixture: ComponentFixture<DegustadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegustadorComponent]
    });
    fixture = TestBed.createComponent(DegustadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
