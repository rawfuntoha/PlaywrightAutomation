const { test, expect } = require('@playwright/test');

test('UI Controls', async ({page})=>
    {
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       const userName = page.locator('#username');
       const signIn = page.locator("#signInBtn");
       const dropdown = page.locator("select.form-control");
       const documentLink = page.locator("[href*='documents-request']");
       await dropdown.selectOption("consult");
       await page.locator(".radiotextsty").last().click();
       await page.locator("#okayBtn").click();
       console.log(await page.locator(".radiotextsty").last().isChecked());
       await expect(page.locator(".radiotextsty").last()).toBeChecked();
       await page.locator("#terms").click();
       await expect(page.locator("#terms").last()).toBeChecked();
       await page.locator("#terms").uncheck();
       expect( await page.locator("#terms").isChecked()).toBeFalsy();
       await expect(documentLink).toHaveAttribute("class","blinkingText");
       
       //await page.pause();


    });
   