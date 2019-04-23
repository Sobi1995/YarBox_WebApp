import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoriteAddressComponent } from './add-favorite-address.component';

describe('AddFavoriteAddressComponent', () => {
  let component: AddFavoriteAddressComponent;
  let fixture: ComponentFixture<AddFavoriteAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoriteAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoriteAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
