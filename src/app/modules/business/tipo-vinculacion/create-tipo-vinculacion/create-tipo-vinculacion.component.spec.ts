import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoVinculacionComponent } from './create-tipo-vinculacion.component';

describe('CreateTipoVinculacionComponent', () => {
  let component: CreateTipoVinculacionComponent;
  let fixture: ComponentFixture<CreateTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
