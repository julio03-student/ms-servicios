import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacultadComponent } from './edit-facultad.component';

describe('EditFacultadComponent', () => {
  let component: EditFacultadComponent;
  let fixture: ComponentFixture<EditFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
