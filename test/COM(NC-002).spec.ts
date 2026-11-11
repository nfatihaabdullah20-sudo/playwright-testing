import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/');
  await page.locator('#txtusername').click();
  await page.locator('#txtusername').fill('tester87.tnb@gmail.com');
  await page.locator('#txtpassword').click();
  await page.locator('#txtpassword').fill('a123123123');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/AccountManagement/IndividualDashboard');

const dialog = page.getByRole('dialog', {
  name: /Electricity Tariff Restructuring/i,
 });

  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: 'Got It!' }).click();
  await page.getByRole('link', { name: 'Apply' }).click();
  await page.locator('a').filter({ hasText: 'I want to check my' }).click();
  await page.getByRole('button', { name: 'View' }).nth(4).click();
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/Application/SupplyApplication/SupplyApplicationTab/NC-000-070-2560');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Start Application' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/Application/SupplyApplication/SupplyApplicationTab/9L1HHgxgf8B754xG2C2KPdYoXtVfaVM_TkAimJzpmIo');
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.locator('#dtSupplyDatePicker').getByRole('button').click();
  await page.getByRole('cell', { name: '16' }).click();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.getByRole('checkbox', { name: 'I don\'t have TIN. Generate a' }).check();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.locator('.square > label').first().click();
  await page.locator('.square > label').first().check();
  await page.locator('#chkTnCSupplyConsumerModalPopup').click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.locator('#chkDeclarationModalPopup').click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.locator('.col-md-12 > div:nth-child(4) > label').click();
  await page.locator('.col-md-12 > div:nth-child(4) > label').check();
  await page.getByRole('button', { name: 'Save as Draft' }).click();
  page.once('dialog', dialog => {
  console.log(`Dialog message: ${dialog.message()}`);
  dialog.dismiss().catch(() => {});
 });
  await page.getByRole('button', { name: 'OK' }).click();
});