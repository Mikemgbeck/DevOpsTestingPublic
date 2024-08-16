import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('http://localhost:5174/');
await page.getByRole('row', { name: 'matt s matt@gmail.com Edit Delete' }).locator('a').click();
await page.getByPlaceholder('Last Name').click();
await page.getByPlaceholder('Last Name').fill('sieber');
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByRole('row', { name: '8 matt sieber matt@gmail.com' }).locator('a').click();
await page.getByPlaceholder('Last Name').click();
await page.getByPlaceholder('Last Name').click();
await page.getByPlaceholder('Last Name').fill('s');
await page.getByRole('button', { name: 'Submit' }).click();
});