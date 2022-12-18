const HomePage = require('../pageobjects/home.page')
const PayeesPage = require('../pageobjects/payees.page')

describe('TC2 Navigate to Payee Page', () => {
    //Navigate to Payees Page
    it('Navigate to Payees Page', async () => {
        await HomePage.open();
        await HomePage.btnMenu.click();
        await HomePage.linkPayees.click();
    })
    
    //Click Add Button
    it('Click Add Button', async () => {
        await PayeesPage.btnAdd.click();
    })
    
    //Enter Payee Details
    it('Enter Payee details', async () => {
        await expect(PayeesPage.payeeName).toBeDisplayed()
        await PayeesPage.payeeName.setValue("Merin")
        await browser.pause(1000); 
        await PayeesPage.newName.click();
        await browser.pause(1000); 
        await PayeesPage.bankNumber.setValue("01");
        await PayeesPage.branch.setValue("0071");
        await PayeesPage.account.setValue("0389500");
        await PayeesPage.suffix.setValue("00");
        await browser.pause(5000); 
    })

    //Click Submit Button
    it('Submit Add Button', async () => {
        let clickable = PayeesPage.addsubmitbtn.isClickable();
        await console.log(clickable);
        await PayeesPage.addsubmitbtn.click();
        await browser.pause(5000); 
        it('demonstrate the alertText command', function () {
            let alert = browser.alertText();
            expect(alert).toEqual('Payee Added');
            
        });
    })

    //Verify Payee is added
    it('Payee added message is displayed', async () => {
         
        it('demonstrate the alertText command', function () {
            let alert = browser.alertText();
            expect(alert).toEqual('Payee Added');
            
        });
    })

    //Verify Payee is added to list of Payees
    it('payee is added in the list of payees', async () => {
         
        const classNameAndText = await $('.js-payee-name=Merin')
        console.log(await classNameAndText.getText())
    })
    
})




