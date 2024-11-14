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
  email: 'e2etesting@example.com',
}

describe('Eshop succesfull run', () => {
  before(() => {
    cy.visit('/')
    cookieModalPatch()
  })

  it('Host user successful buy', () => {
    cy.visit(URLS.mainEshopAll)

    shopListing.addRadnomItemIntoCartFromTile()
    popup.addToCartConfirmation()
    cart.confirmCartItemsToBuy()
    cart.continueToDeliveryDetails()

    delivery.setAdressDelivery(person, adress, 'host')
    //Zakomentováno aby neposílalo nové a nové leady
    //delivery.sendOrder()
  })
})
