import { expect, test } from '@playwright/test';
test('home page renders portfolio title', async ({ page }) => { await page.goto('/'); await expect(page.getByText('Portfolio plus Angular learning lab.')).toBeVisible(); });
test('projects can be searched', async ({ page }) => { await page.goto('/projects'); await page.getByPlaceholder('Search projects or technologies...').fill('Angular'); await expect(page.getByText('Angular Reference Portfolio')).toBeVisible(); });
