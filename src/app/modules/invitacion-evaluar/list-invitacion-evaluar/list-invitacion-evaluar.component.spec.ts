import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvitacionEvaluarComponent } from './list-invitacion-evaluar.component';

describe('ListInvitacionEvaluarComponent', () => {
  let component: ListInvitacionEvaluarComponent;
  let fixture: ComponentFixture<ListInvitacionEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvitacionEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvitacionEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
