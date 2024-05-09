/// <reference types='cypress' />

const url = 'https://www.letskodeit.com/practice';

describe('Child Tabs Demo', () => {
    beforeEach(() => {
        cy.visit(url);
    })
    it('Verify href attribute', () => {
        cy.get('#opentab')
            .should('have.attr', 'href')
            .and('include', '/courses');

    }); 
    it('Should visit the new tab, removing target attribute', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', '/courses');

        cy.get('.input-group > #search').type('Selenium{enter}');
    });
    it('Should visit the new tab, without removing target attribute', () => {
        cy.get('#opentab').then(newTab => {
            const hrefTab = newTab.prop('href');

            cy.visit(hrefTab);
        });

        cy.url().should('include', '/courses');
        cy.get('.input-group > #search').type('Selenium{enter}');
        cy.wait(3000);
        cy.go('back');
    });
});