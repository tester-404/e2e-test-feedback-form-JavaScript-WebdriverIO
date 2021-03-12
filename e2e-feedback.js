import { long3500, med1500 } from "../lib/timeouts"

describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {
        browser.maximizeWindow()
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#feedback').waitForExist()
        $('#feedback').click()
        $('form').waitForExist()
    })

    it('The search function executes the query', () => {
        const searchF = $('#searchTerm')
        searchF.waitForExist()
        searchF.setValue('Vlad Tester\n')
        const searchRES = $('/html/body/div[1]/div[2]/div/h2')
        searchRES.waitForExist()
        expect(searchRES).toHaveText('Search Results:')
        //поиск произошел, возвращаемся в форму обратной связи
        browser.pause(med1500)
        $('#feedback').click()
        $('form').waitForExist()
    })

    //проверяем на обязательность все 4 поля: имя, емейл, тему, текст сообщения

    it('Field Your Name is required', () => {
        const nameR = $('#name')
        nameR.waitForExist()
        expect(nameR).toHaveAttr('required', 'true')
        expect(nameR).toHaveAttr('placeholder', 'Your Name')

    })

    it('Field Email is required', () => {
        const emailR = $('#email')
        emailR.waitForExist()
        expect(emailR).toHaveAttr('required', 'true')
        expect(emailR).toHaveAttr('placeholder', 'Your email address')

    })

    it('Field Subject is required', () => {
        const subR = $('#subject')
        subR.waitForExist()
        expect(subR).toHaveAttr('required', 'true')
        expect(subR).toHaveAttr('placeholder', 'Subject')

    })

    it('Field Question is required', () => {
        const qR = $('#comment')
        qR.waitForExist()
        expect(qR).toHaveAttr('required', 'true')
        expect(qR).toHaveAttr('placeholder', 'Type your questions here...')
    })

    //Проводим негативный тест - попытка отправить форму без данных
    it('Negative test without data entry', () => {
        const butt = $('[name="submit"]')
        butt.click()
        browser.pause(med1500)
    })

    //Проводим позитивный тест - заполняем все поля формы обратной связи и проверяем отправку
    it('Should submit feedback form', () => {
        $('#name').setValue('Name')
        $('#email').setValue('test@test.com')
        $('#subject').setValue('Subjects')
        $('#comment').setValue('Just a message!')
        $('input[type="submit"]').click()
        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html'
        )
        browser.pause(med1500)
    })

})