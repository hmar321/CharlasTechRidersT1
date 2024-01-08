/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CentroSigninComponent } from './centro-signin.component';

describe('CentroSigninComponent', () => {
  let component: CentroSigninComponent;
  let fixture: ComponentFixture<CentroSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
