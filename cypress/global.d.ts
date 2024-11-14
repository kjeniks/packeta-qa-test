/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    dataCy(testId: string): Chainable
    login(user: any): void
  }
}
