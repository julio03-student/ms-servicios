import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacultadComponent } from './list-facultad.component';

describe('ListFacultadComponent', () => {
  let component: ListFacultadComponent;
  let fixture: ComponentFixture<ListFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
