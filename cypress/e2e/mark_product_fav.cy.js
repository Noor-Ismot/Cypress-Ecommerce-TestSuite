describe('Product Sort', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/')
    });
    context('Product Mark as Favorite', () => {

        //Test Case to log into website to mark product
        it('Should mark as favorite products', () => {
            cy.get('#signin').click()
            cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
            cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
                .click()
                .type('testingisfun99{enter}')
            cy.get('#login-btn').click()

            // Test case to mark product as favorite
            //Need to find a solution to click the icon here
            //cy.get('.shelf-stopper').click({ force: true })

            // Assertions to verify selected products are marked
            cy.visit('https://www.bstackdemo.com/favourites')
            cy.get('.products-found > span').should('contain', '1 Product(s) found.')


        })
    })

})
