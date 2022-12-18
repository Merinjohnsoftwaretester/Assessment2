const HomePage = require('../pageobjects/home.page');
const payeesPage = require('../pageobjects/payees.page');

describe('TC1 Navigate to Payees', () => {
    //Go to Main Menu Link
    it('Click Menu', async () => {
        await HomePage.open()
        await HomePage.btnMenu.click();
    })

    //Go to Payee link on Main menu 
    it('Click Payee', async () => {
        await HomePage.linkPayees.click();
    })

    //Verify Payee page is loaded
    it('Verify Payee page is loaded by verify the page title is Payees and url contains/payees', async () => {
        await expect(payeesPage.pagetitle).toBeDisplayed()
        await expect(browser).toHaveUrl('https://www.demo.bnz.co.nz/client/payees')
    })
    
})


