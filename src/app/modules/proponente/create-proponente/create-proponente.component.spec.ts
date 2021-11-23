import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProponenteComponent } from './create-proponente.component';

describe('CreateProponenteComponent', () => {
  let component: CreateProponenteComponent;
  let fixture: ComponentFixture<CreateProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
