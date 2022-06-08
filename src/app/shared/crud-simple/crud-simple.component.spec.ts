import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSimpleComponent } from './crud-simple.component';

describe('CrudSimpleComponent', () => {
  let component: CrudSimpleComponent;
  let fixture: ComponentFixture<CrudSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
