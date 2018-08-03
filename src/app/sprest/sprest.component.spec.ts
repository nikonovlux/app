import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprestComponent } from './sprest.component';

describe('SprestComponent', () => {
  let component: SprestComponent;
  let fixture: ComponentFixture<SprestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
