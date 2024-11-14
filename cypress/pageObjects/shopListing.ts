const el = {
  listOfProducts: 'productCards',
  itemTile: 'productItem',
  addToCart: 'buttonAddToCart',
}

export function addRadnomItemIntoCartFromTile() {
  cy.intercept('POST', '**/action/Cart/addCartItem/**').as('addToCartFromTile')
  cy.dataCy(el.listOfProducts).should('be.visible')
  cy.dataCy(el.itemTile).should('have.length.at.least', 1)
  cy.dataCy(el.addToCart).then(numOfItemsToBuy => {
    cy.dataCy(el.addToCart)
      .eq(Math.floor(Math.random() * Number(numOfItemsToBuy.length)))
      .click()
  })
  cy.wait('@addToCartFromTile')
    .its('response')
    .then(resp => {
      expect(resp.statusCode).equal(200)
      expect(resp.body).to.have.property('message')
      expect(resp.body).to.have.property('messages')
      expect(resp.body).to.have.property('code')
      expect(resp.body).to.have.property('payload')
      expect(resp.body.payload).to.have.property('id')
      expect(resp.body.payload.count).to.be.above(0)
    })
}

export function addItemIntoCartFromDetail() {}
