import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jean-marc Naounou/);
});

test('has heading', async ({ page }) => {
  await page.goto('/');

  // Expect an h1 with "Jean-marc NAOUNOU"
  await expect(page.locator('h1')).toContainText('Jean-marc NAOUNOU');
});
