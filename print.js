const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Convert to absolute URL for local file
    const filePath = `file:///${path.resolve(__dirname, 'index.html').replace(/\\/g, '/')}`;
    
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    await page.pdf({
        path: path.join(__dirname, '..', '..', 'brain', '6c9c994b-0d93-41bb-9f6e-4343bfddef4f', 'Resume_Thabang_Jungqe.pdf'),
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });
    
    await browser.close();
    console.log("PDF generated successfully.");
})();
