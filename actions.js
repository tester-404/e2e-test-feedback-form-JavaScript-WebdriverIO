
import {s500, med1500, long3500} from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/devises'

describe('Browser Action', () => {
    it('Inputs', () => {
        browser.maximizeWindow()
        browser.url('http://devexpress.github.io/testcafe/example/');
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Mike Tester')
        browser.pause(med1500)
        input.clearValue()
     //   browser.pause(med1500)
        input.setValue('SECOND FIELD VALUE')
        browser.pause(med1500)
    })

    it('Click', () => {
    const buttonPopulate = $ ('#populate')
    buttonPopulate.waitForExist()
    buttonPopulate.click()
    browser.pause(long3500)
    })

    it('Checkbox & Radio Button', () => {
        const radio = $ ('#linux')
        radio.waitForExist()
        radio.click()
        browser.pause(long3500)
      
        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(long3500)
    })

    it('Select Box', () => {
        const selectB = $ ('#preferred-interface')
        selectB.waitForExist()
        selectB.selectByVisibleText('Both')
        browser.pause(long3500)
        })

})