describe('Homepage Navigation', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/')
  });
  context('Positive Cases', () => {

    it('Should load the homepage successfully', () => {

      // Verify that the correct URL is loaded
      cy.url().should('eq', Cypress.config().baseUrl + '/')
    })

    it('Should redirect to login page when user clicks on offer, order, or favorite nav items', () => {

      // Click on the Offer link
      cy.get('nav').contains('Offers').click()

      // Verify that the URL changes to the login page
      cy.url().should('include', '/signin?offers=true')

      // Navigate back to the homepage
      cy.go('back');

      // Click on the Order link
      cy.get('nav').contains('Orders').click()

      // Verify that the URL changes to the login page
      cy.url().should('include', '/signin?orders=true')

      // Navigate back to the homepage
      cy.go('back')

      // Click on the Favorite link
      cy.get('nav').contains('Favourites').click()

      // Verify that the URL changes to the login page
      cy.url().should('include', '/signin?favourites=true')
      cy.go('back')
    })
  })
})