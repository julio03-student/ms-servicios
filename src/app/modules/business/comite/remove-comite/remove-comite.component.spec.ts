import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveComiteComponent } from './remove-comite.component';

describe('RemoveComiteComponent', () => {
  let component: RemoveComiteComponent;
  let fixture: ComponentFixture<RemoveComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
