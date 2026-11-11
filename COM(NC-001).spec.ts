import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/');
  await page.locator('#txtusername').click();
  await page.locator('#txtusername').fill('tester87.tnb@gmail.com');
  await page.locator('#txtpassword').click();
  await page.locator('#txtpassword').fill('a123123123');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/AccountManagement/IndividualDashboard');
   const popupBtn = page.getByRole('button', { name: /Got It!|Later/ });
  if (await popupBtn.isVisible({ timeout: 4000 }).catch(() => false)) {
    await popupBtn.click();
  }
  
  await page.getByRole('link', { name: 'Apply' }).click();
  await page.locator('a').filter({ hasText: 'I am moving in. Get me' }).click();
  await page.locator('#ddlState').selectOption('KEL');
  await page.locator('#ddlPostcode').selectOption('17000');
  await page.locator('#txtNameWordCorrectionMapping').click();
  await page.locator('#txtNameWordCorrectionMapping').fill('LOT 628 A, JLn');
  await page.locator('#ui-id-72').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/Application/SupplyApplication/SupplyApplicationTab/NC-000-070-2560');
  await page.locator('#ddlAccountType').selectOption('1');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Start Application' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('#dtSupplyDatePicker').getByRole('button').click();
  await page.getByRole('cell', { name: '5' }).nth(1).click();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.locator('#NewGivenTitleID').selectOption('1-S');
  await page.locator('#txtDOB').click();
  await page.locator('#txtDOB').fill('29-Oct-2000');
  await page.locator('#txtEmail').click();
  await page.locator('#txtEmail').fill('leechaisin@gmail.com');
  await page.locator('#ddlCommunicationOptions').selectOption('83');
  await page.locator('#ddlBillingDeliveryOptions').selectOption('87');
  await page.locator('#txtBillingEmail').click();
  await page.locator('#txtBillingEmail').fill('leechaisin@gmail.com');
  await page.locator('#ddlPremiseOwnership').selectOption('900133');
  await page.getByRole('checkbox', { name: 'I don\'t have TIN. Generate a' }).check();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.getByRole('button', { name: 'Download' }).click();
  await page.locator('#dragndrop_NC_INDV_OCCUPROOF').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Continue' }).click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Doc2.pdf');
  await page.locator('.square > label').first().click();
  await page.locator('.square > label').first().check();
  await page.locator('#chkTnCSupplyConsumerModalPopup').click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.locator('#chkDeclarationModalPopup').click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.locator('.col-md-12 > div:nth-child(4) > label').click();
  await page.locator('.col-md-12 > div:nth-child(4) > label').check();
  await page.getByRole('button', { name: 'Save as Draft' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});