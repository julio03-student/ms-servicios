import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvitacionEvaluarComponent } from './create-invitacion-evaluar.component';

describe('CreateInvitacionEvaluarComponent', () => {
  let component: CreateInvitacionEvaluarComponent;
  let fixture: ComponentFixture<CreateInvitacionEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInvitacionEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvitacionEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
