describe('Foodora Test Automation spec', () => {
  it('Visit Foodora Website', () => {
    cy.visit('https://www.foodora.se/en/')
    cy.contain('Accept All')
  })
})