import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJuradoComponent } from './list-jurado.component';

describe('ListJuradoComponent', () => {
  let component: ListJuradoComponent;
  let fixture: ComponentFixture<ListJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
