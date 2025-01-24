const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: false }); // Set to false to see the browser
  const page = await browser.newPage();

  // Go to the Instagram login page
  await page.goto('https://www.instagram.com/accounts/login/');

  // Wait for the page to load and the username and password fields to be available
  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="password"]');

  // Type the username into the username field slowly
  await page.type('input[name="username"]', 'ashoka180', { delay: 100 });  // 100ms delay between each keypress

  // Type the password into the password field slowly
  await page.type('input[name="password"]', '11718258', { delay: 100 });  // 100ms delay between each keypress

  // Click the login button
  await page.click('button[type="submit"]');  // This targets the submit button

  // Wait for navigation to complete after clicking login
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Check if we're on the homepage (you can customize this part)
  if (page.url().includes('https://www.instagram.com/')) {
    console.log('Login successful!');
  } else {
    console.log('Login failed or page did not navigate correctly.');
  }

  // Wait for the "Save info" button to appear after login (ensure the button is loaded)
  await page.waitForSelector('button._acan._acap._acas._aj1-._ap30');

  // Click the "Save info" button
  await page.click('button._acan._acap._acas._aj1-._ap30');

  // Optionally, wait for any new page actions if needed (for example, after saving info)
  // await page.waitForNavigation();

  // Close the browser
  // await browser.close();
})();
