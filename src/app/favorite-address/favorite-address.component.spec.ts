import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAddressComponent } from './favorite-address.component';

describe('FavoriteAddressComponent', () => {
  let component: FavoriteAddressComponent;
  let fixture: ComponentFixture<FavoriteAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
