import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesiteComponent } from './rulesite.component';

describe('RulesiteComponent', () => {
  let component: RulesiteComponent;
  let fixture: ComponentFixture<RulesiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
