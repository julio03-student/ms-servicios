import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComiteComponent } from './create-comite.component';

describe('CreateComiteComponent', () => {
  let component: CreateComiteComponent;
  let fixture: ComponentFixture<CreateComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
