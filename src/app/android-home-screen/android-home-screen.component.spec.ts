import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidHomeScreenComponent } from './android-home-screen.component';

describe('AndroidHomeScreenComponent', () => {
  let component: AndroidHomeScreenComponent;
  let fixture: ComponentFixture<AndroidHomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidHomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
