import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresAPIComponent } from './reqres-api.component';

describe('ReqresAPIComponent', () => {
  let component: ReqresAPIComponent;
  let fixture: ComponentFixture<ReqresAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqresAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqresAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
