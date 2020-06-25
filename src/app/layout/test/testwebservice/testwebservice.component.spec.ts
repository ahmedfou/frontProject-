import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwebserviceComponent } from './testwebservice.component';

describe('TestwebserviceComponent', () => {
  let component: TestwebserviceComponent;
  let fixture: ComponentFixture<TestwebserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestwebserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
