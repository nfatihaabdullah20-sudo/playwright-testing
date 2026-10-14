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
    await page.waitForTimeout(1000);
  }


  await page.getByRole('link', { name: 'Apply' }).click();
  await page.locator('a').filter({ hasText: 'I am moving in. Get me' }).click();
  await page.locator('#ddlState').selectOption('SEL');
  await page.locator('#ddlPostcode').selectOption('41250');
  const addressInput = page.locator('#txtNameWordCorrectionMapping');
  await addressInput.fill('601');
  const result = page.getByRole('listitem').filter({ hasText: '601' }).first();
  await expect(result).toBeVisible({ timeout: 15_000 });
  await result.click();

  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/Application/COT/Declaration?COTID=COT-000-003-1480');
  await page.locator('#AccountTypeID').selectOption('1');
  await page.getByText('Own', { exact: true }).click();
  await page.getByText('Own', { exact: true }).check();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('button', { name: 'Start Application' }).click();
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/Application/COT/Main?AccountTypeID=1&RequestReasonID=&ApplicantType=A&COTID=31480&OwnershipType=1&StatusID=1&PremiseTypeHeaderID=1&PremiseNo=5008635840&PremiseState=SEL&PremisePostalCode=41250&PremiseArea=-&PremiseCity=KLANG&PremiseStreet=JLN+TK+GADONG+KECIL&PremiseType=L&PremiseBuilding=&PremiseHouseNo=&PremiseUnitNo=601&StationCode=6140&PremiseStreetCode=&PremiseTypeHeaderID=1&PremiseTypeItemCode=DOM19&PremiseAddress=601%2C+JLN+TK+GADONG+KECIL%2C+-%2C+41250%2C+KLANG%2C+SEL.&IsDSEligible=True&EkycStatus=VERIFIED&EkycUserName=LEE+CHAI+SIN&AccountTypeID=1');
  await page.goto('https://mytnbawprtw-s.mytnb.com.my:8041/Application/COT/TenantDetails');

  await page.locator('#txtDOB').click();
  await page.locator('#txtDOB').fill('23/08/2000');
  await page.getByRole('cell', { name: '23' }).click();

  await page.locator('#txtMobileNo').click();
  await page.locator('#txtMobileNo').fill('0194560908');

  await page.locator('#txtEmail').click();
  await page.locator('#txtEmail').fill('leechaisin@gmail.com');

  await page.getByRole('checkbox', { name: 'I don\'t have TIN. Generate a' }).check();

  await page.locator('input[name="NextOfKinName2"]').click();
  await page.locator('input[name="NextOfKinName2"]').fill('UMAIRAH BINTI HASSAN');

  await page.locator('#txtKinPhone').click();
  await page.locator('#txtKinPhone').fill('0176158090');

  await page.locator('#txtKinEmail').click();
  await page.locator('#txtKinEmail').fill('umairahassan@gmail.com');
  await page.getByRole('button', { name: 'Save and Proceed' }).click();

  await page.locator('#ddlPurposeOfPremiseCOT').selectOption('8');
  await page.locator('#ddlPremiseTypeItemCode').selectOption('DOM19');
  await page.locator('#divDcDateTime').getByRole('button').click();
  await page.getByRole('cell', { name: '19' }).click();

  await page.locator('#ddlCommunicationOptions').selectOption('83');
  await page.locator('#ddlBillingDeliveryOptions').selectOption('87');

  await page.locator('#txtBillingEmail').click();
  await page.locator('#txtBillingEmail').fill('umairahassan@gmail.com');
  await page.getByText('Same as premises address').click();
  await page.getByText('Same as premises address').check();
  await page.getByRole('button', { name: 'Save and Proceed' }).click();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const download = await downloadPromise;
  await page.locator('#dragndrop_PREMISE_OCCUPATION').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Lampiran A_4064.pdf');

  await page.locator('.square > label').first().click();
  await page.locator('#chkTnCModalPopup').click();
  await page.locator('#btnAcceptAgreement').click();
  await page.locator('#chkDeclarationFormModalPopup').click();
  await page.locator('#declarationFormContainer').getByText('I agree').click();
  await page.locator('div:nth-child(8) > .col-md-12 > .square > label').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.locator('#number1').click();
  await page.locator('#number1').fill('1');
  await page.locator('#number2').fill('3');
  await page.locator('#number3').fill('1');
  await page.locator('#number4').fill('0');
  await page.locator('#number5').fill('1');
  await page.locator('#number6').fill('3');

  await page.getByRole('button', { name: 'OK' }).click();
});