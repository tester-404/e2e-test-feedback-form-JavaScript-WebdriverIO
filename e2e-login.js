import { long3500, med1500 } from "../lib/timeouts"

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        browser.maximizeWindow()
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        $('#login_form').waitForExist()
        expect(browser).toHaveTitle('Zero - Log in');
        $('#user_login').setValue('invalid')
        $('#user_password').setValue('invalid')
        $('input[type="submit"]').click()
        const errorH3 = $('//h3') // нахожу надпись
        expect(errorH3).toHaveText('Troubles entering the site?') // проверяю текст
        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        $('#login_form').waitForExist()
        expect(browser).toHaveTitle('Zero - Log in'); // проверяю тайтл 
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        browser.pause(med1500)
        $('#user_remember_me').click() // ставлю галочку чтобы запомнил меня
        $('input[type="submit"]').click()
        expect(browser).toHaveTitle('Zero - Account Summary'); // проверяю тайтл 
        $('.nav-tabs').waitForExist()
        $('//*[@id="pay_bills_tab"]').click() // нажимаю на раздел оплаты счетов
        browser.pause(med1500)
        const payBills = $('//*[@id="ui-tabs-1"]/h2') // нахожу надпись
        expect(payBills).toHaveText('Make payments to your saved payees') // проверяю текст
        const amount = $('#sp_amount')
        expect(amount).toHaveAttr('required', 'true') // проверяю что поле обязательно к заполнению
    })

    it('Should logout from app', () => {
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        browser.pause(med1500)
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#pages-nav').waitForExist()
    })
})

