const {test} = require('@playwright/test');
//const {expect} = require('../playwright.config');

test('Browser context playwright test',async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   // console.log(await page.title());
   const title = await page.title();

   // Display the title
   console.log('Page Title:', title);
});

test.only('page playwright test',async ({page})=>

    {
        //const context = await browser.newContext();
        //const page = await context.newPage();
        await page.goto("https://google.com");
      console.log(await page.title());
      //  expect(page).toHaveTitle("Google");

    });