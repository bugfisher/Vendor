import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponent } from './testprogress.component';

describe('TestprogressComponent', () => {
  let component: TestprogressComponent;
  let fixture: ComponentFixture<TestprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
