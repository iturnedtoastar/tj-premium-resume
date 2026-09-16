const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const filePath = 'file:///' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
    await page.goto(filePath, { waitUntil: 'load' });
    await page.pdf({ 
        path: 'Fixed_Print_Test.pdf', 
        format: 'A4', 
        printBackground: true, 
        margin: { top: '0', right: '0', bottom: '0', left: '0' } 
    });
    await browser.close();
    console.log('Fixed PDF generated.');
})();
