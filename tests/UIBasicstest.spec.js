const {test} = require('@playwright/test');

test('Browser context playwright test',async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('page playwright test',async ({page})=>

    {
        //const context = await browser.newContext();
        //const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    });