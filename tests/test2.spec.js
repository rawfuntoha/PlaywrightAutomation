const { test, expect } = require('@playwright/test');

test('Log page title to console', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 
  const title = await page.title();
  
  
  console.log('Page Title:', title);
  //expect(title).toBe('Google');  

});

test('lLog page title to console', async ({ page }) => {

    await page.goto("https://fb.com/");
   
    const title = await page.title();
    
    
    console.log('Page Title:', title);
    //expect(title).toBe('Google');  
  
  });


// test('Browser context playwright test',async ({browser})=>

//     {
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//         console.log(await page.title());
//     });


//  test.only('page playwright test',async ({page})=>

//         {
//             //const context = await browser.newContext();
//             //const page = await context.newPage();
//             await page.goto("https://google.com");
//             console.log(await page.title());
//            // expect(page).toBe("Google");
    
