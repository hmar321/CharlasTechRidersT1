/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechriderSigninComponent } from './techrider-signin.component';

describe('TechriderSigninComponent', () => {
  let component: TechriderSigninComponent;
  let fixture: ComponentFixture<TechriderSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechriderSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechriderSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
