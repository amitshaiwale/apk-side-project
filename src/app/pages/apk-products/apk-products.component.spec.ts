import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkProductsComponent } from './apk-products.component';

describe('ApkProductsComponent', () => {
  let component: ApkProductsComponent;
  let fixture: ComponentFixture<ApkProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApkProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
