import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkButtonComponent } from './apk-button.component';

describe('ApkButtonComponent', () => {
  let component: ApkButtonComponent;
  let fixture: ComponentFixture<ApkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
