

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get btnMenu () {
        return $('.Language__container');
    }

    get linkPayees () {
        return $('=Payees');
    }
    get linkPayment () {
        return $('#left > div.js-app-topbar.app-topbar > div > div.js-main-menu > section > div.MainMenu-content.js-main-menu-content > nav.MainMenu-nav > ul > li.js-main-menu-paytransfer.js-main-menu-primary-option > button > span');
    }
    get everydayaccount(){
        return $('[title="Everyday"]');
    }
get availableamountofeverydayaccount()
{
    return $('/html/body/div[1]/div[4]/div/div/div[1]/div[2]/div/div[1]/div/div[3]/div/div/div[1]/div/div/div[1]/section/h4')
}
get billsaccount(){
    return $('[title="Bills"]');
}
get availableamountofbillsaccount()
{
    return $('/html/body/div[2]/div/div/div[3]/div[2]/div[2]/div/div[2]/div[2]/div/div/div/div/div/div[2]/div[3]/div[2]/span[3]')
}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('client');
    }
}

module.exports = new HomePage();
