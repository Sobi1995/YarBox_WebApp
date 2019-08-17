import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoronlineComponent } from './factoronline.component';

describe('FactoronlineComponent', () => {
  let component: FactoronlineComponent;
  let fixture: ComponentFixture<FactoronlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoronlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoronlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
