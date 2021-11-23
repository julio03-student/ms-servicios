import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveModalidadComponent } from './remove-modalidad.component';

describe('RemoveModalidadComponent', () => {
  let component: RemoveModalidadComponent;
  let fixture: ComponentFixture<RemoveModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
