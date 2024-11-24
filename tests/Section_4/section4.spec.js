const {test,expect} = require('@playwright/test');


test.only('Browser context playwright test',async ({browser})=>

{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const title = await page.title();
  console.log('Page Title:', title);
  await page.locator('#username').fill("toha");
  await page.locator("[type='password']").fill("tohapassword");
  await page.locator('#signInBtn').click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');


});

test('page playwright test',async ({page})=>

    {
        
      await page.goto("https://google.com");
      console.log(await page.title());
      expect(page).toHaveTitle("Google");

    });