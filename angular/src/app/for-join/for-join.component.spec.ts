import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForJoinComponent } from './for-join.component';

describe('ForJoinComponent', () => {
  let component: ForJoinComponent;
  let fixture: ComponentFixture<ForJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
