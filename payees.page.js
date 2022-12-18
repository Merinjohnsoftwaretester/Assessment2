

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PayeesPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnAdd () {
        return $('.js-add-payee');
    }

    get payeeName () {
        return $('#ComboboxInput-apm-name');
    }

    get newName () {
        return $('=Someone new: Merin');
    }

    get bankNumber () {
        return $('#apm-bank');
    }
    get branch () {
        return $('#apm-branch');
    }
    get account () {
        return $('#apm-account');
    }
    get suffix () {
        return $('#apm-suffix');
    }
    get addsubmitbtn () {
        return $('#apm-form > div.row.controls > button.js-submit.Button.Button--primary');
    }
    get errorheader () {
        return $('#modal-form-manager > div > div.error-box > div');
    }
    get pagetitle ()
    {
        return $('#YouMoney > div > div > div.Payees.js-payees > section > header > h1 > span')
    }
    get nameheader ()
    {
        return $('#YouMoney > div > div > div.Payees.js-payees > section > section > div > div:nth-child(2) > header.CustomSection-header.u-invisible-xs > div > div.Col-sm-6 > h3 > span')
    }
    get firstpayee ()
    {
        return $('/html/body/div[2]/div/div/div[3]/section/section/div/ul/li[1]/div/div/div[1]/div/p[1]/span[1]')
    }
}

module.exports = new PayeesPage();
