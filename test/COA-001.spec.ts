import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/');

  await page.locator('#txtusername').click();
  await page.locator('#txtusername').fill('tester87.tnb@gmail.com');
  await page.locator('#txtpassword').click();
  await page.locator('#txtpassword').fill('a123123123');
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/AccountManagement/IndividualDashboard');
  await page.getByRole('button', { name: /Later|Got It!/i }).click();

  await page.getByRole('link', { name: 'Apply' }).click();
  await page.locator('a').filter({ hasText: 'I am moving out. Close your' }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click(); 

  await page.getByRole('button', { name: 'Start Application' }).click();
  await page.getByText('I\'m staying / It\'s empty').click();
  await page.getByText('I\'m staying / It\'s empty').check();
  await page.getByRole('button', { name: 'Save and Proceed' }).click();
  await page.getByRole('button', { name: 'Save and Proceed' }).click();

  await page.locator('#dtPickerContainer').getByRole('button').click();
  await page.getByRole('cell', { name: '19' }).click();
  await page.locator('#dcPreferredDcHour').selectOption('140000');
  await page.locator('.col-xl-7 > .square > label').click();
  await page.locator('.col-xl-7 > .square > label').check();
  await page.locator('#dcRefundMethod').selectOption('E');
  await page.locator('#dcBankName').selectOption('1007|12');
  await page.locator('#dcBankAccount').click();
  await page.locator('#dcBankAccount').fill('162290110966');
  await page.locator('#dcContactNumber').click();
  await page.locator('#dcContactNumber').fill('0194310314');
  await page.locator('#dcEmail').click();
  await page.locator('#dcEmail').fill('leechaisin@gmail.com');
  await page.getByText('Same as Premises Address').click();
  await page.getByText('Same as Premises Address').check();
  await page.getByRole('button', { name: 'Save and Proceed' }).click();
  
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const download = await downloadPromise;
  await page.locator('.default-spacing > .square > label').first().click();
  await page.locator('.default-spacing > .square > label').first().check();
  await page.locator('#chkDeclarationModalPopup').click();
  await page.locator('#btnAgreeDeclaration').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.locator('#number1').click();
  await page.locator('#number1').fill('6');
  await page.locator('#number2').fill('3');
  await page.locator('#number3').fill('0');
  await page.locator('#number4').fill('1');
  await page.locator('#number5').fill('3');
  await page.locator('#number6').fill('1');

  await page.getByRole('button', { name: 'OK' }).click();
});