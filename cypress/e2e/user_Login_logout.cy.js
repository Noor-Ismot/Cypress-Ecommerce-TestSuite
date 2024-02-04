describe('User Login & Logout', () => {
    context('Positiove Cases', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.wait(1000)
        })

        it('Should allow a registered user to login and logout successfully', () => {

            // Test steps to login with valid credentials
            cy.get('#signin').click()
            cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
            cy.wait(1000)
            cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
                .click()
                .type('testingisfun99{enter}')
            cy.wait(1000)
            cy.get('#login-btn').click()

            // Assertions to verify successful login
            cy.url().should('include', '/?signin=true')
            cy.get('.username').should('have.text', 'demouser')
            cy.get('#logout').should('be.visible')
            cy.wait(1000)

            // Test steps to logout
            cy.get('#logout').click()

            // Assertions to verify successful logout
            cy.url().should('eq', 'https://www.bstackdemo.com/')
            cy.get('#signin').should('have.text', 'Sign In')
            cy.wait(1000)

        })
    })
})