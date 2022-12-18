const HomePage = require('../pageobjects/home.page')
const PayeesPage = require('../pageobjects/payees.page')

describe('TC3 Navigate to Payee Page', () => {

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


    //Enter only payee name and not added account number and submit the form and verify error message is displayed
    it('Enter Payee details-name', async () => {
        await expect(PayeesPage.payeeName).toBeDisplayed()
        await PayeesPage.payeeName.setValue("Merin")
        await browser.pause(1000); 
        await PayeesPage.newName.click();
        await browser.pause(1000); 
     
    })
    it('Submit Add Button', async () => {
        
        await PayeesPage.addsubmitbtn.click();
        await browser.pause(5000); 
        await expect(PayeesPage.payeeName).toBeDisplayed()
        
    })
    it('Errormessageisdisplayed', async () => {
        
        await expect(PayeesPage.errorheader).toBeDisplayed()
        
    })
    
// Enter the missing Account number and verify the error is gone now and can submit successfully
    it('ReEnter Missing Payee details', async () => {
        
      await PayeesPage.bankNumber.setValue("01");
      await PayeesPage.branch.setValue("0071");
      await PayeesPage.account.setValue("0389500");
      await PayeesPage.suffix.setValue("00");
      await browser.pause(5000); 
    })
    
    it('Submit Add Button', async () => {
        let clickable = PayeesPage.addsubmitbtn.isClickable();
        await console.log(clickable);
        await PayeesPage.addsubmitbtn.click();
        await browser.pause(5000); 
       
        
    })
    
    it('Check error message is not displayed now', async () => {
       
        !expect(PayeesPage.errorheader).toBeDisplayed();
        it('demonstrate the alertText command', function () {
            let alert = browser.alertText();
            expect(alert).toEqual('Payee Added');
            
        });
    })
    
   
    
})




