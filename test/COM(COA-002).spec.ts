import { test, expect } from '@playwright/test';

test('COM-002: Resume draft from last completed milestone', async ({ page }) => {
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/');
  await page.locator('#txtusername').fill('tester87.tnb@gmail.com');
  await page.locator('#txtpassword').fill('a123123123');
  await page.locator('#txtpassword').press('Enter');

  await page.waitForURL('**/IndividualDashboard');

  const laterBtn = page.getByRole('button', { name: 'Later' });
  if (await laterBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await laterBtn.click();
  }

  await page.getByRole('link', { name: 'Apply' }).click();
  await page.locator('a').filter({ hasText: 'I want to check my' }).click();
  await page.getByRole('button', { name: 'View' }).nth(2).click();

  await expect(page.locator('.modal-backdrop')).toHaveCount(0);

  const startApplication = page.getByRole('button', { name: 'Start Application' });
  await expect(startApplication).toBeVisible();
  await startApplication.click();
  const saveAndProceed = page.getByRole('button', { name: 'Save and Proceed' });

  await expect(saveAndProceed).toBeVisible();
  await expect(saveAndProceed).toBeEnabled();
  await saveAndProceed.click();

  await expect(page.getByRole('heading', { name: /Payment & History|Other Information|Documents/i })).toBeVisible();

});