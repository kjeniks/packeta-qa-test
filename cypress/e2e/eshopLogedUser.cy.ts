import { URLS } from '../constants/urls'
import { logedUser } from '../constants/users'
import { cookieModalPatch } from '../support/helper'
import * as shopListing from '../pageObjects/shopListing'
import * as popup from '../pageObjects/popups'
import * as cart from '../pageObjects/cart'
import * as delivery from '../pageObjects/delivery'

const adress: Adress = {
  street: 'Panská',
  number: '3',
  city: 'Praha 1',
  discrit: 'Praha',
  zip: '19000',
}

const person: Person = {
  name: 'John Doe',
  phone: '777777777',
}

describe('Eshop succesfull run', () => {
  before(() => {
    cy.visit('/')
    cookieModalPatch()
  })

  it('Logged user successful buy', () => {
    cy.login(logedUser)
    cart.emptyCartIfNeeded()

    cy.visit(URLS.mainEshopAll)

    shopListing.addRadnomItemIntoCartFromTile()
    popup.addToCartConfirmation()
    cart.confirmCartItemsToBuy()
    cart.continueToDeliveryDetails()

    delivery.setAdressDelivery(person, adress, 'logged')
    //Zakomentováno aby neposílalo nové a nové leady
    //delivery.sendOrder()
  })
})

/**
 * V Ideálním případě by měl na konci proběhnout API check do databáze zda-li se objednávka správně nastavila.
 */
