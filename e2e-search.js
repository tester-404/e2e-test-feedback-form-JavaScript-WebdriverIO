/*

import { long3500, med1500 } from "../lib/timeouts"

describe('E2E Tests - Search', () => {
	it('Should load homepage', () => {
        browser.maximizeWindow()
		browser.url('http://zero.webappsecurity.com/index.html')
		$('#searchTerm').waitForExist()
	})

	it('Should submit searchbox', () => {
		$('#searchTerm').setValue('bank')
		browser.keys('Enter')
		const resultsTitle = $('h2')
		resultsTitle.waitForExist()
		expect(resultsTitle).toHaveText('Search Results:')
        browser.pause(long3500)
	})
})

*/