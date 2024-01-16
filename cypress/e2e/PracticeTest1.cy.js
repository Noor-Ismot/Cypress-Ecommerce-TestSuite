it('Visit Shein Website', () => {
  cy.visit('https://www.shein.se/')
  cy.get('.c-coupon-box > .iconfont').click()
  cy.get('.div-input').type('Skirt{Enter}')
  //cy.get('.search-btn > .suiiconfont-critical').click()
  cy.contains('Beige').click()
  cy.wait(2000)
  //cy.get('').should(contain,'')
})