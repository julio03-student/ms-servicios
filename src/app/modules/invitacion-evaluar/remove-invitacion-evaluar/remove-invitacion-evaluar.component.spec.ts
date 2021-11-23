import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveInvitacionEvaluarComponent } from './remove-invitacion-evaluar.component';

describe('RemoveInvitacionEvaluarComponent', () => {
  let component: RemoveInvitacionEvaluarComponent;
  let fixture: ComponentFixture<RemoveInvitacionEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveInvitacionEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveInvitacionEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
