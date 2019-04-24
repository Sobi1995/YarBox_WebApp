import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoriteAddressDestinationComponent } from './add-favorite-address-destination.component';

describe('AddFavoriteAddressDestinationComponent', () => {
  let component: AddFavoriteAddressDestinationComponent;
  let fixture: ComponentFixture<AddFavoriteAddressDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoriteAddressDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoriteAddressDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
