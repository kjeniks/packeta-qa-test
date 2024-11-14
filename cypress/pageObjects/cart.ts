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
  cy.get('body').then(content => {
    if (content.find('#empty-cart').length > 0) {
      cy.log('Košík je prázdný, přecházím na jinou část testu')
    } else {
      cy.log('Košík obsahuje položky, provádím mazání')

      cy.dataCy(el.listOfItems).should('be.visible')
      cy.get(`[data-testid*="${el.item}"]`).each(item => {
        cy.wrap(item).within(() => {
          cy.dataCy(el.price).trigger('mouseover') // Vyvolá pouze pokud je nutné
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
