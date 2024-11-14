const el = {
  confirmCartPopUp: '#cboxLoadedContent',
  productName: 'textPopupProductName',
  goToCartButton: 'buttonPopupCart',
}

export function addToCartConfirmation() {
  cy.get(el.confirmCartPopUp)
    .should('be.visible')
    .within(() => {
      cy.dataCy(el.productName).should('be.visible')
      cy.dataCy(el.goToCartButton).click()
    })
}
