// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');  // Assuming your app runs locally on port 3000

  // Expect a title "to contain" the substring "Hello Professor".
  await expect(page).toHaveTitle(/Hello Professor/);
});

// You can add more tests based on your application's behavior
