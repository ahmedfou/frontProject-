import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnormalComponent } from './testnormal.component';

describe('TestnormalComponent', () => {
  let component: TestnormalComponent;
  let fixture: ComponentFixture<TestnormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestnormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
