describe('Buy products, happy path', () => {

    before(() =>{
        cy.login()
    })
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    it('Add products to cart', () => {
        // Check if the "Remove" button exists for the backpack
        cy.get('body').then($body => {
            if ($body.find('[id="remove-sauce-labs-backpack"]').length) {
                cy.get('[id="remove-sauce-labs-backpack"]').click()
            }
            cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
        })
    
        // Check if the "Remove" button exists for the bike light
        cy.get('body').then($body => {
            if ($body.find('[id="remove-sauce-labs-bike-light"]').length) {
                cy.get('[id="remove-sauce-labs-bike-light"]').click()
            }
            cy.get('[id="add-to-cart-sauce-labs-bike-light"]').click()
        })
    })      

    it('Opens cart', () => {
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bike Light').should('be.visible')
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').should('be.visible')
    })
    it('Goes to checkout', () => {
        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.url().should('include', 'checkout-step-one.html')
    })

    it('Fills in checkout data', () => {
        cy.get('[data-test="firstName"]').click().type('John')
        cy.get('[data-test="lastName"]').click().type('Smith')
        cy.get('[data-test="postalCode"]').click().type('80900')
        cy.get('[data-test="continue"]').contains('Continue').click()
    })

    it('Finish ordering process', () => {
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bike Light').should('be.visible')
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').should('be.visible')
        cy.get('[data-test="total-label"]').contains('43.18')
        cy.get('[data-test="finish"]').contains('Finish').click()
        cy.get('[data-test="complete-header"]').contains('Thank you for your order!').should('be.visible')
    })

})