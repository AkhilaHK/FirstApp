import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighteningComponent } from './lightening.component';

describe('LighteningComponent', () => {
  let component: LighteningComponent;
  let fixture: ComponentFixture<LighteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LighteningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LighteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
