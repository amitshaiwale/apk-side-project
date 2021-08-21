import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkCheckoutComponent } from './apk-checkout.component';

describe('ApkCheckoutComponent', () => {
  let component: ApkCheckoutComponent;
  let fixture: ComponentFixture<ApkCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApkCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
