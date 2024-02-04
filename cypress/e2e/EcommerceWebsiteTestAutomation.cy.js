describe('E-commerce Website Test Suite', () => {
  it('Visit E-commerce Website', () => {
    cy.visit('https://www.bstackdemo.com/')
    cy.get('#signin').click()
    cy.contains('Select Username')
    cy.get('#react-select-2-option-0-0')
    cy.contains('Select Password').type('testingisfun99')
    cy.get('#login-btn').click()
  })
})