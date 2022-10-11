/// <reference types ="cypress" />

describe('Funcionalidade: Login', () => {

    before(() => {
        cy.visit('login/')
        cy.cPoupos()
    });

    it.skip('Acessando site', () => {
        cy.log('Entrou no site')
        cy.wait(1000)
        // cy.get('#downshift-0-input').click()
    });

    //it.skip não executa esse cenário, dai não precisa desmarcar o only
    it.skip('Deve fazer o login sem sucesso', () => {
        cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('anysmitt@gmail.com')
        cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('XXXX')
        cy.get('.vtex-login-2-x-sendButton > .vtex-button').click()
        cy.get('.vtex-login-2-x-formError').should('be.visible').log('Usuário ou Senha errada')
        cy.log('Teste Finalizado sem sucesso')
    });

    it('Deve fazer o login com sucesso', () => {
        //cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type(user.email)     
        //cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type(user.senha)
        //  cy.get('.vtex-login-2-x-button > .vtex-button > .vtex-button__label').click()       
        cy.cLogin()

        //cy.get('.pt6 > :nth-child(2)').should('be.visible').click() // poupop de idade > 18

        cy.log('Usuário logado com sucesso')
        cy.get('.emporiodacerveja-emporio-theme-3-x-modalBody').should('be.visible').click()
        cy.get('.pt6 > :nth-child(2)').should('be.visible').click() // poupop de idade > 18
        //  cy.contains('button', 'Aceitar todos os cookies').should('be.visible').click()

    });

    it.skip('Selecionar a localização', () => {
        cy.cLocalizacao()
    });

    it('Fazer pedido', () => {
        cy.get('.emporiodacerveja-emporio-theme-3-x-navIcon').click() // barra lateral esquerda menu 
        cy.cPedido()
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .justify-end')
            .should('be.visible').click()
        //cy.cPoupos()
    });

});