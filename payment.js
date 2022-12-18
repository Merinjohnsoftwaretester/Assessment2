const HomePage = require('../pageobjects/home.page')
const PayeesPage = require('../pageobjects/payees.page');
const PaymentPage = require('../pageobjects/Payment.page');

describe('TC5 Navigate to Payment Page', () => {

    //Verify the current balance of Every day account and Bills account before transaction
    it('Check the available balance of everyday and  account before transfer', async () => {
        await HomePage.open();
        await browser.pause(5000);
        await HomePage.everydayaccount.click();
        await browser.pause(5000);
        const available = await HomePage.availableamountofeverydayaccount;
        console.log(await available.getText());
        await HomePage.billsaccount.click();
        await browser.pause(5000);
        const available1 = await HomePage.availableamountofbillsaccount;
        console.log(await available1.getText());
      })

//Navigate to payment page
    it('Navigate to Payment Page', async () => {
        await HomePage.open();
        await HomePage.btnMenu.click();
        await HomePage.linkPayment.click();
        await browser.pause(5000);
    })
    
    it('Choosefromaccount', async () => {
        
        let clickable = PaymentPage.choosefromaccount.isClickable();
    console.log(clickable);
        await PaymentPage.choosefromaccount.click();
        await browser.pause(5000);
    })

    it('Chooseeverydayaccountfromlist', async () => {
        
        let clickable = PaymentPage.everydayaccount.isClickable();
    console.log(clickable);
        await PaymentPage.everydayaccount.click();
        await browser.pause(5000);
    })    
    
//Transfer 500 from Everyday account to Bills Account 
    it('EnterTransferamount', async () => {
        await expect(PaymentPage.amounttransfer).toBeDisplayed()
        await PaymentPage.amounttransfer.setValue("500")
        await browser.pause(5000);
})

it('Choosetoaccount', async () => {
        
    let clickable = PaymentPage.choosetoaccount.isClickable();
    console.log(clickable);
    await PaymentPage.choosetoaccount.click();
    await browser.pause(5000);
})

it('Clickaccountstab', async () => {
        
    let clickable = PaymentPage.accountstab.isClickable();
    await console.log(clickable);
    await PaymentPage.accountstab.click();
    await browser.pause(5000);
})

it('Choosebillsaccountfromlist', async () => {
        
    let clickable = PaymentPage.Billsaccount.isClickable();
    await console.log(clickable);
    await PaymentPage.Billsaccount.click();
    await browser.pause(5000);
})   

//Verify Transfer Successful message is displayed
it('Clicktransferbutton and verify "Transfer Successful" alert generated successfully', async () => {
    
    
    let clickable = PaymentPage.transferbutton.isClickable();
    await console.log(clickable);
    await PaymentPage.transferbutton.click();
    await browser.pause(5000);
 
    it('demonstrate the alertText command', function () {
        let alert = browser.alertText();
        expect(alert).toEqual('Transfer Successful');
        
    });
}) 

    // Verify the current balance of Every day account and Bills account after transaction
        it('Check the available balance of everyday and Bills account after transfer', async () => {
            await HomePage.open();
            await browser.pause(5000);
            await HomePage.everydayaccount.click();
            await browser.pause(5000);
            const available = await HomePage.availableamountofeverydayaccount;
            console.log(await available.getText());
            await HomePage.billsaccount.click();
            await browser.pause(5000);
            const available1 = await HomePage.availableamountofbillsaccount;
            console.log(await available1.getText());

          })
    
    })
    
    





