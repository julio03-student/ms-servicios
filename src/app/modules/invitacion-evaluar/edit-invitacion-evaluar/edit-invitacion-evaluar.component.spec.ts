import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvitacionEvaluarComponent } from './edit-invitacion-evaluar.component';

describe('EditInvitacionEvaluarComponent', () => {
  let component: EditInvitacionEvaluarComponent;
  let fixture: ComponentFixture<EditInvitacionEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInvitacionEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvitacionEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
