import { URLS } from '../constants/urls'
import { logedUser } from '../constants/users'
import { cookieModalPatch } from '../support/helper'
import * as shopListing from '../pageObjects/shopListing'
import * as popup from '../pageObjects/popups'
import * as cart from '../pageObjects/cart'
import * as delivery from '../pageObjects/delivery'

const adressData: any = [adress1, adress2, adress3, adress4, adress5, adress6]
const randomAdress: Adress = adressData[Math.floor(Math.random() * adressData.length - 1)]

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

    delivery.setAdressDelivery(person, randomAdress, 'logged')
    //Zakomentováno aby neposílalo nové a nové leady
    //delivery.sendOrder()
  })
})

/**
 * V Ideálním případě by měl na konci proběhnout API check do databáze zda-li se objednávka správně nastavila.
 */
