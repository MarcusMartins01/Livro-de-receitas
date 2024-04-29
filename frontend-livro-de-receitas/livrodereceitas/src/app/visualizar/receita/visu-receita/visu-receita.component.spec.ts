import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuReceitaComponent } from './visu-receita.component';

describe('VisuReceitaComponent', () => {
  let component: VisuReceitaComponent;
  let fixture: ComponentFixture<VisuReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisuReceitaComponent]
    });
    fixture = TestBed.createComponent(VisuReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
