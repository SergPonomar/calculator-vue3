describe('Rendered app on mobile', () => {
  it('Occupy all viewport', () => {
    cy.visit('/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Mobile Safari/537.36',
      }
    })
    cy.window().then((win) => {
      cy.get('[data-testid="calculator"]')
        .should('have.css', 'width', win.innerWidth + 'px')
        .should('have.css', 'height', win.innerHeight + 'px')
    })
  })
})