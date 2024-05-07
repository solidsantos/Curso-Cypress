/// <reference types="cypress" />

const url = 'https://wcaquino.me/cypress/componentes.html';

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit(url);

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title()
            .should('contain', 'Campo')
            .and('be.equal', 'Campo de Treinamento');

            cy.title()
            .should('contain', 'Campo')
            .should('be.equal', 'Campo de Treinamento');

        // TODO imprimir o log no console
        // TODO escrever o log em um campo de texto

        // cy.pause()
    });
    it('Should find and interact with an element', () => {
        cy.visit(url);
        cy.get('#buttonSimple').click();
        cy.get('#buttonSimple')
            .should('have.value', 'Obrigado!');

    });
});