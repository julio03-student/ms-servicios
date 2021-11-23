import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordatorioComponent } from './create-recordatorio.component';

describe('CreateRecordatorioComponent', () => {
  let component: CreateRecordatorioComponent;
  let fixture: ComponentFixture<CreateRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
