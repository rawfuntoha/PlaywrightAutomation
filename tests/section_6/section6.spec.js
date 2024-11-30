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
   
    test.only('@Child windows', async ({browser})=>
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



 
    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('সার্চ করুন', { exact: true }).click();
      await page.getByLabel('সার্চ করুন', { exact: true }).fill('jamal');
      await page.goto('https://www.google.com/search?q=jamal&sca_esv=857fdb1044b4db16&source=hp&ei=mv9KZ_nrDaOWseMP3oCD4Ao&iflsig=AL9hbdgAAAAAZ0sNqpZHrr062eIG6itft_X7I_tGFbjn&ved=0ahUKEwj5oLyVgoSKAxUjS2wGHV7AAKwQ4dUDCA4&uact=5&oq=jamal&gs_lp=Egdnd3Mtd2l6IgVqYW1hbDIOEC4YgAQYsQMYgwEYigUyBRAuGIAEMgUQABiABDIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARInS5QjBFYvClwBXgAkAEAmAHJAaABzgyqAQUwLjguMbgBA8gBAPgBAZgCDqAC7QyoAgrCAgoQABgDGOoCGI8BwgIKEC4YAxjqAhiPAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgQQABgDwgIIEAAYgAQYsQPCAgsQABiABBixAxiKBcICCxAuGIAEGLEDGIoFwgIUEC4YgAQYsQMY0QMYgwEYxwEYigXCAhEQLhiABBixAxjRAxjHARiKBcICCxAuGIAEGLEDGIMBmAMFkgcFNS44LjGgB8Fa&sclient=gws-wiz');
      await page.getByRole('link', { name: 'জামাল ভূঁইয়া Wikipedia https' }).click();
      await page.getByText('জামাল হ্যারিস ভূঁইয়া (জন্ম: ১০ এপ্রিল ১৯৯০; জামাল ভূঁইয়া নামে সুপরিচিত) হলেন এ').click();
      await page.getByText('ডেনীয় ফুটবল ক্লাব প্র্যানপির যুব পর্যায়ের হয়ে খেলার মাধ্যমে জামাল ফুটবল জগতে ').click();
      await page.getByText('ডেনীয় ফুটবল ক্লাব প্র্যানপির যুব পর্যায়ের হয়ে খেলার মাধ্যমে জামাল ফুটবল জগতে ').click();
      await page.getByRole('link', { name: 'বহিঃসংযোগ' }).click();
      await page.locator('.vector-column-start').click();
      await page.getByLabel('ছোট').check();
      await page.getByLabel('ছোট').click();
      await page.getByLabel('চওড়া').check();
      await page.getByLabel('চওড়া').click();
      await page.getByLabel('স্বয়ংক্রিয়').check();
      await page.getByLabel('স্বয়ংক্রিয়').click();
      await page.getByLabel('উজ্জ্বল').check();
    });