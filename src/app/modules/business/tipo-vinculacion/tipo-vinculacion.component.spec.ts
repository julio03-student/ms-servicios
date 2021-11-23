import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVinculacionComponent } from './tipo-vinculacion.component';

describe('TipoVinculacionComponent', () => {
  let component: TipoVinculacionComponent;
  let fixture: ComponentFixture<TipoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
