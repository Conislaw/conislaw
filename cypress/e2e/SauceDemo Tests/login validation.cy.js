describe('Logs in with incorrect data', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    
    it('Visits the login page', () => {
        cy.visit('/')
    })

    it('Fill in wrong user data and check validation', () => {
        cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('Token')
        cy.get('[data-test="username"]').type(Cypress.env('LOGIN_UNVERIFIED_USER'))
        cy.get('[data-test="password"]').type(Cypress.env('LOGIN_PASSWORD'))
        cy.get('[data-test="login-button"]').click()
        cy.wait('@Token').its('response.statusCode').should('eq', 503)
        cy.get('[data-test="error"]').should('be.visible')
    })
})