import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDriverComponent } from './accept-driver.component';

describe('AcceptDriverComponent', () => {
  let component: AcceptDriverComponent;
  let fixture: ComponentFixture<AcceptDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
