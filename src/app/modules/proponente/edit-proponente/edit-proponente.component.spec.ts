import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProponenteComponent } from './edit-proponente.component';

describe('EditProponenteComponent', () => {
  let component: EditProponenteComponent;
  let fixture: ComponentFixture<EditProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
