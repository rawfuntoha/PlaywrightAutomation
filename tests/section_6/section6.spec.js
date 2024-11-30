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
   
    test('@Child windows', async ({browser})=>
    {
        const context = await browser.newContext();
        const page =  await context.newPage();
        const userName = page.locator('#username');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
       // documentLink.click();
        const [newPage]= await Promise.all(
                  [
                     context.waitForEvent('page'),
                     documentLink.click(),
                  
                  ])

        const  text = await newPage.locator(".red").textContent();
        const arrayText = text.split('@')
        const email =  arrayText[1].split(" ")[0]
        console.log(email);
        await page.locator("#username").fill(email);
        await page.pause();
        console.log(await page.locator("#username").textContent()); 


    });
    
//http://trace.playwright.dev/