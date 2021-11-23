import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacultadComponent } from './create-facultad.component';

describe('CreateFacultadComponent', () => {
  let component: CreateFacultadComponent;
  let fixture: ComponentFixture<CreateFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
