import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFactorComponent } from './final-factor.component';

describe('FinalFactorComponent', () => {
  let component: FinalFactorComponent;
  let fixture: ComponentFixture<FinalFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
