describe('Foodora Test Automation spec', () => {
  it('Visit Foodora Website', () => {
    cy.visit('https://www.foodora.se/en/')
    cy.wait(4000)
    // cy.get('#data-testid').click()
    cy.get('.search-input-container').type('Kilbäcksgatan 20B, 451 30 Uddevalla')
    cy.wait(4000)
    cy.get('.search-input-container').should('contains', 'Kilbäcksgatan 20B, 451 30 Uddevalla')
  })
})