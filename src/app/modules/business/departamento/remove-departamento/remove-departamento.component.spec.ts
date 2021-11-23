import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDepartamentoComponent } from './remove-departamento.component';

describe('RemoveDepartamentoComponent', () => {
  let component: RemoveDepartamentoComponent;
  let fixture: ComponentFixture<RemoveDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
