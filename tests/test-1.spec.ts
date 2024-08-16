import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=localhost%3A%2F%2F5174&oq=localhost%3A%2F%2F5174&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEINTU3M2owajKoAgCwAgE&sourceid=chrome&ie=UTF-8');
  await page.goto('http://localhost:5174/');
  await page.getByRole('row', { name: 'matt s matt@gmail.com Edit Delete' }).locator('a').click();
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('sieber');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});