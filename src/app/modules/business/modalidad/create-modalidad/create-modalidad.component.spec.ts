import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalidadComponent } from './create-modalidad.component';

describe('CreateModalidadComponent', () => {
  let component: CreateModalidadComponent;
  let fixture: ComponentFixture<CreateModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
