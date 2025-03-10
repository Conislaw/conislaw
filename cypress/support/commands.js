Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(Cypress.env('LOGIN_VERIFIED_USER'))
    cy.get('[data-test="password"]').type(Cypress.env('LOGIN_PASSWORD'))
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', 'inventory.html')
})

