import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTipoVinculacionComponent } from './remove-tipo-vinculacion.component';

describe('RemoveTipoVinculacionComponent', () => {
  let component: RemoveTipoVinculacionComponent;
  let fixture: ComponentFixture<RemoveTipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
