const { test, expect } = require('@playwright/test');

test.only('Browser context playwright test',async ({page})=>  {
    await page.goto("https://rahulshettyacademy.com/client");
     const delay = page.waitForTimeout(10000);

    await page.locator('#userEmail').fill("jatritest@gmail.com");
    await page.locator('#userPassword').fill("12345@Jatri");
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    await delay;
  });
