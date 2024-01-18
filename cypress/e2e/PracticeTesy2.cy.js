it('Visit Medium Website', () => {
    cy.visit('https://www.willys.se/')
    cy.wait(4000)
    //cy.get('#onetrust-reject-all-handler').click()

    cy.get('#onetrust-accept-btn-handler')
        .should('be.visible')
        .should('contain', 'Acceptera All cookies')

    cy.get('[data-testid="horizontalbanner-link"] > .sc-dfa63f22-0')
        .and('contain', 'Till maten') //chained assertion
        .and('have.class', 'sc-dfa63f22-0 gRPtcz sc-607c619f-4 bWdbZk')
})