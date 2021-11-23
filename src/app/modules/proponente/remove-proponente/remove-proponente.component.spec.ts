import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProponenteComponent } from './remove-proponente.component';

describe('RemoveProponenteComponent', () => {
  let component: RemoveProponenteComponent;
  let fixture: ComponentFixture<RemoveProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
