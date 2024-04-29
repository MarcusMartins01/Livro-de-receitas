import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegustacaoComponent } from './degustacao.component';

describe('DegustacaoComponent', () => {
  let component: DegustacaoComponent;
  let fixture: ComponentFixture<DegustacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegustacaoComponent]
    });
    fixture = TestBed.createComponent(DegustacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
