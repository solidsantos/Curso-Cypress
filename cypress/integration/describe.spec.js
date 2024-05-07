/// <reference types="cypress" />

it('A external test...', () => {

});

// Executa apenas este
/*it.only('A external only test...', () => {

});*/

describe('Should group tests...', () => {
    it('A internal test...', () => {

    });

    it.skip('A internal skipped test...', () => {

    });

    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        });
    });

    describe.skip('A group of more skipped tests...', () => {
        it('A specific test...', () => {

        });
    });
    // Posso agrupar vários testes
});