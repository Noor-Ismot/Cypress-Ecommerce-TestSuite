it('Visit Medium Website', () => {
    cy.visit('https://www.willys.se/')
    cy.wait(4000)
    cy.get('#onetrust-reject-all-handler').click()
    cy.get('[data-testid="horizontalbanner-link"] > .sc-dfa63f22-0')
        .should('contain', 'Till maten')
    cy.get('[data-testid="mini-cart-button"]').should('have.focus')
    //should('have.class', 'sc-dfa63f22-0 gRPtcz sc-607c619f-4 bWdbZk')
    //cy.get('#onetrust-accept-btn-handler').should('contain', 'Acceptera All cookies')

})