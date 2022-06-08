import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRolPorUsuarioComponent } from './nuevo-rol-por-usuario.component';

describe('NuevoRolPorUsuarioComponent', () => {
  let component: NuevoRolPorUsuarioComponent;
  let fixture: ComponentFixture<NuevoRolPorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoRolPorUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRolPorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
