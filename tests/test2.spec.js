const { test, expect } = require('@playwright/test');

test('Log page title to console', async ({ page }) => {
  // Navigate to a URL
  await page.goto('https://google.com');
  
  // Get the title of the page
  const title = await page.title();
  
  // Log the title to the console
  console.log('Page Title:', title);
  expect(title).toBe('Google');  

});