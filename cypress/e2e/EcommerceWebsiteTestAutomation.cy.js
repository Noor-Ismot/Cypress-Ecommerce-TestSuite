describe('E-commerce Website Test Suite', () => {
  it('Visit E-commerce Website', () => {
    cy.visit('https://www.bstackdemo.com/')
    cy.wait(1000)
  })
  it('Log into Website with Valid Credentials and Logout', () => {
    cy.visit('https://www.bstackdemo.com/')
    cy.wait(1000)
    cy.get('#signin').click()
    cy.get('#username > .css-yk16xz-control > .css-1hwfws3')
      .type('demouser{enter}')
    cy.wait(1500)
    cy.get('#password > .css-yk16xz-control > .css-1hwfws3')
      .click()
      .type('testingisfun99{enter}')
    cy.wait(1500)
    cy.get('#login-btn').click()
    cy.wait(1500)
    cy.contains('Logout').click()

  })
})