import { any } from 'cypress/types/bluebird'
import { URLS } from '../constants/urls'

const el = {
  listOfItems: 'tableCart',
  content: '#cart-wrapper',
  empty: '#empty-cart',
  item: 'productItem_',
  price: 'cellTotalPrice',
  deleteButton: 'buttonDeleteItem',
  next: 'buttonNextStep',
}

export function confirmCartItemsToBuy() {
  cy.get(`[data-testid*="${el.item}"]`).should('have.length', 1)
}

export function continueToDeliveryDetails() {
  cy.dataCy(el.next).click()
  cy.url().should('include', 'objednavka/krok-1/')
}

export function emptyCartIfNeeded() {
  cy.visit(URLS.cart)
  cy.intercept('POST', '**action/Cart/deleteCartItem/').as('deleteEvent')
  cy.get(el.content).should('be.visible')
  cy.get('#cart-wrapper').then(content => {
    cy.log(content.text())
    //aktuálně náhradní řešení, ideálně vyřešit za pomocí lepšího tagování či api kontroly
    if (content.text().includes('košík je prázdný')) {
    } else {
      cy.dataCy(el.listOfItems).should('be.visible')
      cy.get(`[data-testid*="${el.item}"]`).each(item => {
        cy.wrap(item).within(() => {
          cy.dataCy(el.price).trigger('mouseover')
          cy.dataCy(el.deleteButton).click()
          cy.wait('@deleteEvent')
            .its('response')
            .then(resp => {
              expect(resp.statusCode).to.equal(200)
            })
        })
      })
    }
  })
}
