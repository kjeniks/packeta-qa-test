import { cookieModalPatch } from '../support/helper'

const el = {
  point: 'deliveryPoint',
  packetaWidget: '#packeta-widget',
  input: '.custom-autocomplete',
  branch: '.branch-list-item',
  branchName: '.branch-name',
  selectBranch: '#btn_select_branch',
  selectDelivery: 'shippingMethod',
  goNext: 'buttonNextStep',
  personalData: {
    name: 'input#billFullName',
    email: 'input#email',
    phone: 'input#phone',
  },
  billingData: {
    street: 'input#billStreet',
    number: 'input#billHouseNumber',
    city: 'input#billCity',
    discrit: 'input#billDistrict',
    zip: 'input#billZip',
  },
}

//Aktuálně nepoužívané, díky tomu, že funguje jako iframe, bylo by potřeba doladit jisté náležitosti s kódem a případně s api aby posílalo data i v případě otevření iframu v jiném okně. Aktuálně chybí mnoho pomocných selectorů k tomu aby mohlo 100% fungovat.
export function setZetBox(adress: string) {
  cy.url().then(url => {
    cy.intercept('GET', '**/v6/wps/api/widget/v2/clusters/**').as('mapaDataLodaded')
    cy.dataCy(el.point).click()
    cy.get(el.packetaWidget)
      .invoke('attr', 'src')
      .then(src => {
        cy.log(src)
        cy.visit(src)
      })
    cookieModalPatch()
    cy.get(el.input).find('input').type(adress).wait(1500).get('.custom-autocomplete__list').click()
    cy.wait('@mapaDataLodaded')
    cy.get(el.branchName).should('be.visible')
    cy.get(el.branch).first().click()
    cy.get(el.selectBranch).click()
    cy.visit(url)
  })
}

export function setAdressDelivery(person: Person, adress: Adress, user: UserType) {
  cy.dataCy(el.selectDelivery).last().click()
  cy.dataCy(el.goNext).click()

  cy.get(el.personalData.name).clear().type(person.name)
  user === 'host' && cy.get(el.personalData.email).clear().type(person.email)
  cy.get(el.personalData.phone).clear().type(person.phone)
  cy.get(el.billingData.street).clear().type(adress.street)
  cy.get(el.billingData.number).clear().type(adress.number)
  cy.get(el.billingData.city).clear().type(adress.city)
  cy.get(el.billingData.discrit).clear().type(adress.discrit)
  cy.get(el.billingData.zip).clear().type(adress.zip)
}

export function sendOrder() {
  cy.dataCy(el.goNext).click()
  cy.url().should('include', 'dekujeme')
}
