import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByRole('row', { name: 'matt s 8 Edit Delete' }).locator('a').click();
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('sieber');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('row', { name: 'tim jamess 4 Edit Delete' }).locator('a').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.goto('http://localhost:5174/');
});