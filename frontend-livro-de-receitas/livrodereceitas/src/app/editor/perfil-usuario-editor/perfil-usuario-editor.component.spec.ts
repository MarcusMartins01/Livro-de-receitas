import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioEditorComponent } from './perfil-usuario-editor.component';

describe('PerfilUsuarioEditorComponent', () => {
  let component: PerfilUsuarioEditorComponent;
  let fixture: ComponentFixture<PerfilUsuarioEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioEditorComponent]
    });
    fixture = TestBed.createComponent(PerfilUsuarioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
