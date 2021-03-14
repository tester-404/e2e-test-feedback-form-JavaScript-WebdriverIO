import {s500, med1500, long3500} from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/devises'

describe('First WebdriverIO autotest for Today', () => {
    it('Load Example Website', () => {
        browser.maximizeWindow()
        browser.url('http://example.com/');
        browser.pause(med1500); 
        expect(browser).toHaveUrl('http://example.com/');
        expect(browser).toHaveTitle('Example Domain');
    })

    it('H1 should be visible', () => {
        // Get selector and save it to variable
        const h1 = $('h1')
        // Do assertion
        h1.waitForExist()
        expect(h1).toBeVisible()
    })

    it('P should be visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible()
    })

    it('Check Link Value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute', () => {
        browser.url('http://devexpress.github.io/testcafe/example/');
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
    
    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
     
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('screen22.png')
   //     browser.pause(s500);
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 600)
        browser.pause(med1500);
    })

    it('Change Browser Viewport - Part 2', () => {
        browser.setWindowSize(11539, 500)
        browser.pause(med1500);
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(med1500);
    })

    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(med1500);
    })

    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(long3500);
    })



})


// npm run test
// npm run test --silent
