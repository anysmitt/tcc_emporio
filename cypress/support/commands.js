// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("cLogin", () => {
    cy.fixture("fLogin").then((user) => {
        cy.log(user.nome)
        cy.get('.vtex-login-2-x-inputContainerEmail').type(user.email)     
        cy.get('.relative > .vtex-input').type(user.senha)
    })
    cy.get('.vtex-login-2-x-sendButton > .vtex-button').click()  // botao ok   
    //Aqui utilizo o intercept para pegar a API que informar que o plugin foi carregado
    cy.intercept('https://www.emporiodacerveja.com.br/api/vtexid/pub/authentication/classic/validate').as('waitBlip')
    cy.wait('@waitBlip') // wait aguardando a resposta do carregamento do plugin(por padrão espera até 5 segundos)
    
});

Cypress.Commands.add("cPoupos", () => {
    //cy.get('.emporiodacerveja-emporio-theme-3-x-modalBody').should('be.visible').click()
    cy.get('.pt6 > :nth-child(2)').should('be.visible').click() // poupop de idade > 18
    //cy.get('#onetrust-accept-btn-handler').should('be.visible').click() // poupop de cookie    
    cy.get('.vtex-login-2-x-button > .vtex-button > .vtex-button__label').should('be.visible').click() // botão popup cookie
});

Cypress.Commands.add("cPedido", () => {

    Cypress.Cookies.preserveOnce()
    Cypress.on('uncaught:exception', (err, runnable) => { // para tratar erro de cors
        return false
    })
    cy.get('.vtex-menu-2-x-menuItem--mobile-menu-item-cerveja').should('be.visible').click() //opção Cerveja
    cy.contains('button', 'Trigo').should('be.visible').click()
       
});

Cypress.Commands.add("cLocalizacao", () => {
    //cy.get('.pr1 > .vtex-render-runtime-8-x-lazyload').should('be.visible').click() // click na localização
    cy.get('.emporiodacerveja-emporio-theme-3-x-insertLocationText').should('be.visible').click() 
    cy.get('.emporiodacerveja-emporio-theme-3-x-inputTest').should('be.visible').click().type('89037013') //colocando o cep
    cy.get('.p2').click() //buscar o cep
    cy.log('Localização Adicionada')
});