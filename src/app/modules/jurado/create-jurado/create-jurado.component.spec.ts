import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJuradoComponent } from './create-jurado.component';

describe('CreateJuradoComponent', () => {
  let component: CreateJuradoComponent;
  let fixture: ComponentFixture<CreateJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
