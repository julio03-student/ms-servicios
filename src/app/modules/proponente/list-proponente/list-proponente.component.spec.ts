import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProponenteComponent } from './list-proponente.component';

describe('ListProponenteComponent', () => {
  let component: ListProponenteComponent;
  let fixture: ComponentFixture<ListProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
