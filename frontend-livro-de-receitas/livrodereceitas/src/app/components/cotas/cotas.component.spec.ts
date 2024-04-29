import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotasComponent } from './cotas.component';

describe('CotasComponent', () => {
  let component: CotasComponent;
  let fixture: ComponentFixture<CotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotasComponent]
    });
    fixture = TestBed.createComponent(CotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
