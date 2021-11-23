import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoVinculacionComponent } from './list-tipo-vinculacion.component';

describe('ListTipoVinculacionComponent', () => {
  let component: ListTipoVinculacionComponent;
  let fixture: ComponentFixture<ListTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
