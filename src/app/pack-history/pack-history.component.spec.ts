import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackHistoryComponent } from './pack-history.component';

describe('PackHistoryComponent', () => {
  let component: PackHistoryComponent;
  let fixture: ComponentFixture<PackHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
