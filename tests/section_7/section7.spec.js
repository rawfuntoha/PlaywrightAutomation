const { test, expect } = require('@playwright/test');

test('Browser playwright test',async ({page})=>  {


    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator('#userEmail').fill("jatritest@gmail.com");
    await page.locator('#userPassword').fill("12345@Jatri");
    await page.locator('#login').click();


    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          await products.nth(i).locator("text= Add To Cart").click();
          break;
       }
    }


    await page.pause();
    
  });
