import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveJuradoComponent } from './remove-jurado.component';

describe('RemoveJuradoComponent', () => {
  let component: RemoveJuradoComponent;
  let fixture: ComponentFixture<RemoveJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
