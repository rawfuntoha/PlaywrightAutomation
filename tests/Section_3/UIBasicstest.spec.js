const {test,expect} = require('@playwright/test');


test('Browser context playwright test',async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 
   const title = await page.title();

   
   console.log('Page Title:', title);
});

test('page playwright test',async ({page})=>

    {
        
      await page.goto("https://google.com");
      console.log(await page.title());
      expect(page).toHaveTitle("Google");

    });