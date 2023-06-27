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
const elementos = require ('../support/Elements/globalElements').ELEMENTS

Cypress.Commands.add('Cadastro', (email,nomedousuario,usuario,senhadousuario) => {
    cy.get(elementos.emailDoUsuario).type(email)
    cy.get(elementos.nomeCompleto).type(nomedousuario)
    cy.get(elementos.usuario).type(usuario)
    cy.get(elementos.senhaDoUsuario).type(senhadousuario)

})