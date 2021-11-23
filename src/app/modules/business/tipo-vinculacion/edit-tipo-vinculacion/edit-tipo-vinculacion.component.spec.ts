import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoVinculacionComponent } from './edit-tipo-vinculacion.component';

describe('EditTipoVinculacionComponent', () => {
  let component: EditTipoVinculacionComponent;
  let fixture: ComponentFixture<EditTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
