import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateboardComponent } from './skateboard.component';

describe('SkateboardComponent', () => {
  let component: SkateboardComponent;
  let fixture: ComponentFixture<SkateboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkateboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
