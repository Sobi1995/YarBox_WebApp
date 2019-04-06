import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletChargingComponent } from './wallet-charging.component';

describe('WalletChargingComponent', () => {
  let component: WalletChargingComponent;
  let fixture: ComponentFixture<WalletChargingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletChargingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
