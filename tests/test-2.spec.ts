import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByRole('button', { name: 'Create User' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Michael');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Beck');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('mb@gmail.com');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('');
  await page.getByText('SubmitCancel').click();
  await page.getByPlaceholder('Last Name').fill('');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('');
  await page.getByRole('button', { name: 'Cancel' }).click();
});
