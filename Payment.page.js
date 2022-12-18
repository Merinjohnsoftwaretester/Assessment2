

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {
    /**
     * define selectors using getter methods
     */

    

    get choosefromaccount () {
        return $('.Language__container*=Choose account');
    }
    get everydayaccount () {
        return $('/html/body/div[7]/div/div/div[2]/div/div/ul/li[2]/button/div/div/div[2]/p[1]');
    }
    get choosetoaccount()
    {
        return $('[data-testid="to-account-chooser"]'); 
    }
    get accountstab()
    {
        return $('[data-testid="to-account-accounts-tab"]');
    }
   get Billsaccount()
    {
        return $('[data-monitoring-label="Transfer Form Account Card"]');
    }
   get amounttransfer()
   {
       return $('[name="amount"]');
   }
   get transferbutton(){
    return $('[data-monitoring-label="Transfer Form Submit"]');
   }

   getcurrentbalanceofEverydayaccount()
   {
    return $('data-rv-text="account:currentBalance | currency"]').$('.account-balance');
   }

   getcurrentbalanceofBillsaccount()
   {
    return $('data-rv-text="account:currentBalance | currency"]').$('.account-balance');
   }




    

   
}

module.exports = new PaymentPage();
