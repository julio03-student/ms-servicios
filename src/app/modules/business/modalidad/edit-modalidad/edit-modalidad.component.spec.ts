import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalidadComponent } from './edit-modalidad.component';

describe('EditModalidadComponent', () => {
  let component: EditModalidadComponent;
  let fixture: ComponentFixture<EditModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
