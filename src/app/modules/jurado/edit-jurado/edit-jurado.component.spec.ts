import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJuradoComponent } from './edit-jurado.component';

describe('EditJuradoComponent', () => {
  let component: EditJuradoComponent;
  let fixture: ComponentFixture<EditJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
