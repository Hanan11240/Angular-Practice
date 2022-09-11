import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustiveMapComponent } from './exhaustive-map.component';

describe('ExhaustiveMapComponent', () => {
  let component: ExhaustiveMapComponent;
  let fixture: ComponentFixture<ExhaustiveMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhaustiveMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustiveMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
