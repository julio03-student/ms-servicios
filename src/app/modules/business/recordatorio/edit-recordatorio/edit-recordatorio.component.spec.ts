import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordatorioComponent } from './edit-recordatorio.component';

describe('EditRecordatorioComponent', () => {
  let component: EditRecordatorioComponent;
  let fixture: ComponentFixture<EditRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
