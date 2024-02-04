describe('Product Sort', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/')
    });
    context('Product sorting by price', () => {
        // Test case for sorting products by rating in ascending order
        it('Should sort products by price in ascending order', () => {
            cy.get('select')
                .select('Lowest to highest')
                .should('have.value', 'lowestprice')

        })

        // Test case for sorting products by rating in descending order
        it('Should sort products by price in ascending order', () => {
            cy.get('select')
                .select('Highest to lowest')
                .should('have.value', 'highestprice')
        })

    })
})