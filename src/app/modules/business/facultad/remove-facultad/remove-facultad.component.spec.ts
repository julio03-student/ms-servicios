import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFacultadComponent } from './remove-facultad.component';

describe('RemoveFacultadComponent', () => {
  let component: RemoveFacultadComponent;
  let fixture: ComponentFixture<RemoveFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
