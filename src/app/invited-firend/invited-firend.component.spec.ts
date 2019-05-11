import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedFirendComponent } from './invited-firend.component';

describe('InvitedFirendComponent', () => {
  let component: InvitedFirendComponent;
  let fixture: ComponentFixture<InvitedFirendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedFirendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedFirendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
