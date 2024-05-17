/// <reference types='cypress' />

const url = 'https://www.testingnotebook.com/posts/handle-new-tabs-in-cypress-tests/';
describe('Testing implementation', () => {
    it('should override opening new tab to current window', () => {
        cy.visit(url)
      
        //stubWinOpenAsWinLocation()
        //cy.get('#js-link').click()
      
        //cy.url().should('contain', '/about')
      })
});