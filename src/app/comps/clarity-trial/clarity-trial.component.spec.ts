import { ComponentFixture, TestBed } from '@angular/core/testing';
import { test, expect }  from '@playwright/test';
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



test('Login Form inputs', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=components-login-form--example');
  const email = await page.inputValue('#email');
  const password = await page.inputValue('#password');
  await expect(email).toBe('email@provider.com');
  await expect(password).toBe('a-random-password');
});
