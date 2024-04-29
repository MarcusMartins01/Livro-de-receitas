import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarReceitasComponent } from './avaliar-receitas.component';

describe('AvaliarReceitasComponent', () => {
  let component: AvaliarReceitasComponent;
  let fixture: ComponentFixture<AvaliarReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliarReceitasComponent]
    });
    fixture = TestBed.createComponent(AvaliarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
