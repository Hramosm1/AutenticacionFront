import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDeRolesComponent } from './asignacion-de-roles.component';

describe('AsignacionDeRolesComponent', () => {
  let component: AsignacionDeRolesComponent;
  let fixture: ComponentFixture<AsignacionDeRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionDeRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionDeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
