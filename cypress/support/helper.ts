const el = {
  acceptCookiesButton: '[data-cookiefirst-action="accept"]',
}

export function cookieModalPatch() {
  cy.get(el.acceptCookiesButton).click()
  cy.get(el.acceptCookiesButton).should('not.exist')
  cy.then(() => {
    expect(localStorage.getItem('cookiefirst-id')).not.equal('null')
    expect(localStorage.getItem('cookiefirst-consent')).exist
  })
}

export function dataCy(data: string): any {
  return cy.get(`[data-testid="${data}"]`)
}
