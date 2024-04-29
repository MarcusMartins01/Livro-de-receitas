import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasadminComponent } from './receitasadmin.component';

describe('ReceitasadminComponent', () => {
  let component: ReceitasadminComponent;
  let fixture: ComponentFixture<ReceitasadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasadminComponent]
    });
    fixture = TestBed.createComponent(ReceitasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
