import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSvcComponent } from './use-svc.component';

describe('UseSvcComponent', () => {
  let component: UseSvcComponent;
  let fixture: ComponentFixture<UseSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseSvcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
