const el = {
  loginButton: 'signin',
  loginModal: 'formLogin',
  mail: 'inputEmail',
  password: 'inputPassword',
  submitLogin: 'buttonSubmit',
}

export function login(user: User) {
  cy.dataCy(el.loginButton).click()
  cy.dataCy(el.loginModal).should('be.visible')
  cy.dataCy(el.mail).type(user.mail)
  cy.dataCy(el.password).type(user.password)
  cy.dataCy(el.submitLogin).click()
  cy.url().should('include', 'klient')
}
