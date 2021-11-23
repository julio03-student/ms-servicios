import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRecordatorioComponent } from './remove-recordatorio.component';

describe('RemoveRecordatorioComponent', () => {
  let component: RemoveRecordatorioComponent;
  let fixture: ComponentFixture<RemoveRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
