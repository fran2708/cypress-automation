describe('page tests', () => {
    it('load correct url', () => {
        cy.visit('http://www.google.com')
    })

    it('should check correct url', () => {
        cy.url().should('include', 'google.com')
    })

    it('google logo should be visible', () => {
        cy.get('.lnXdpd').should('be.visible');
    })
})