/// <reference types='cypress' />

const url = 'https://wcaquino.me/cypress/componentes.html';

describe('Esperas...', () => {
    before(() => {
        cy.visit(url);
    });
    beforeEach(() => {
        cy.reload();
    });
    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('Funciona');
    });

    //Resulta em erro
    it.skip('Deve fazer retentativas', () => {
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist');
    });
});
