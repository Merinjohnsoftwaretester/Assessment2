const HomePage = require('../pageobjects/home.page')
const PayeesPage = require('../pageobjects/payees.page')

describe('TC4 Navigate to Payee Page', () => {

    //Navigate to Payees page
    it('Navigate to Payees Page', async () => {
        await HomePage.open();
        await HomePage.btnMenu.click();
        await HomePage.linkPayees.click();
    })
    
    //Add new payee
    it('Click Add Button', async () => {
        await PayeesPage.btnAdd.click();
    })
    
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

    it('Submit Add Button', async () => {
        let clickable = PayeesPage.addsubmitbtn.isClickable();
        console.log(clickable);
        await PayeesPage.addsubmitbtn.click();
        await browser.pause(5000); 
        it('demonstrate the alertText command', function () {
            let alert = browser.alertText();
            expect(alert).toEqual('Payee Added');
            
        });
    })

    it('Payee added message is displayed', async () => {
         
        it('demonstrate the alertText command', function () {
            let alert = browser.alertText();
            expect(alert).toEqual('Payee Added');
            
        });
    })
    
    //Verify Payee is added to list of payees
    it('payee is added in the list of payees', async () => {
         
        const classNameAndText = await $('.js-payee-name=Merin')
        console.log(await classNameAndText.getText())
    })

    //Verify the list is sorted in ascending order by checking the first payee name before and after click on name header
    it('firstpayee before click name header', async () => {
        const firstpayee = await PayeesPage.firstpayee;
        console.log(await firstpayee.getText());
        
     })

    //Click on name header and verify the first payee after click
    it('Click Nameheader and display first payee after click name header', async () => {
        let isableclick = PayeesPage.nameheader.isClickable();
        console.log(isableclick);
        await PayeesPage.nameheader.click();
        await browser.pause(5000); 
        const firstpayee = await PayeesPage.firstpayee;
        console.log(await firstpayee.getText());
        
    })
 
})




