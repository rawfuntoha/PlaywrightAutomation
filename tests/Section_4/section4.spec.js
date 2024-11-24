const {test,expect} = require('@playwright/test');


test.only('Browser context playwright test',async ({browser})=>

{

  
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const title = await page.title();
  console.log('Page Title:', title);
  const userName = page.locator('#username');
  const signIn = page.locator("#signInBtn");
 // const delay = page.waitForTimeout(10000);
  const cardTitles =  page.locator(".card-body a");

  await page.locator('#username').fill("toha");
 
  await page.locator("[type='password']").fill("learning");
  await page.locator('#signInBtn').click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  
  console.log(await cardTitles.nth(1).textContent());

  //await delay;


});

test('page playwright test',async ({page})=>

    {
        
      await page.goto("https://google.com");
      console.log(await page.title());
      expect(page).toHaveTitle("Google");

    });