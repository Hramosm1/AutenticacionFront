import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDePermisosComponent } from './listado-de-permisos.component';

describe('ListadoDePermisosComponent', () => {
  let component: ListadoDePermisosComponent;
  let fixture: ComponentFixture<ListadoDePermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDePermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDePermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
