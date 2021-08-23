import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkDialogComponent } from './apk-dialog.component';

describe('ApkDialogComponent', () => {
  let component: ApkDialogComponent;
  let fixture: ComponentFixture<ApkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
