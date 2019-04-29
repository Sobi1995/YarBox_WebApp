import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackDaltileComponent } from './pack-daltile.component';

describe('PackDaltileComponent', () => {
  let component: PackDaltileComponent;
  let fixture: ComponentFixture<PackDaltileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackDaltileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackDaltileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
