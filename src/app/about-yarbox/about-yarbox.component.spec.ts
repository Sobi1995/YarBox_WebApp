import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYarboxComponent } from './about-yarbox.component';

describe('AboutYarboxComponent', () => {
  let component: AboutYarboxComponent;
  let fixture: ComponentFixture<AboutYarboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutYarboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYarboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
