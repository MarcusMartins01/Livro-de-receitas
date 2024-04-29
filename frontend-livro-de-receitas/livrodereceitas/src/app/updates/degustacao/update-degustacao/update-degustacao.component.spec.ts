import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDegustacaoComponent } from './update-degustacao.component';

describe('UpdateDegustacaoComponent', () => {
  let component: UpdateDegustacaoComponent;
  let fixture: ComponentFixture<UpdateDegustacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDegustacaoComponent]
    });
    fixture = TestBed.createComponent(UpdateDegustacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
