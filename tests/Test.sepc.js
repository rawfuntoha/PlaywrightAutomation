const { test, expect } = require('@playwright/test');

test('Browser context playwright test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to the URL
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Get the title of the page
  const title = await page.title();

  // Display the title in the terminal
  console.log('Page Title:', title);

  // Optional: You can also use an assertion to check the title
  expect(title).toBe('Login Page Practise');
});

test.only('Page title test for Google', async ({ page }) => {
  // Go to Google
  await page.goto("https://google.com");

  // Get and display the title
  const title = await page.title();
  console.log('Page Title:', title);

  // Optional: Check the title with an assertion
  expect(title).toBe('test');
});