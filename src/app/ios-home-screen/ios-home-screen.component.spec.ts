import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosHomeScreenComponent } from './ios-home-screen.component';

describe('IosHomeScreenComponent', () => {
  let component: IosHomeScreenComponent;
  let fixture: ComponentFixture<IosHomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosHomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
