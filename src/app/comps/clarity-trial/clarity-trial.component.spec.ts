import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityTrialComponent } from './clarity-trial.component';

describe('ClarityTrialComponent', () => {
  let component: ClarityTrialComponent;
  let fixture: ComponentFixture<ClarityTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarityTrialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarityTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
