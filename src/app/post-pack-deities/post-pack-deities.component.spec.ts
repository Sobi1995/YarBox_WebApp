import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPackDeitiesComponent } from './post-pack-deities.component';

describe('PostPackDeitiesComponent', () => {
  let component: PostPackDeitiesComponent;
  let fixture: ComponentFixture<PostPackDeitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPackDeitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPackDeitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
