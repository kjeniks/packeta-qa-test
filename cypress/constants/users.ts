export const logedUser: User = {
  mail: Cypress.env('USER_EMAIL'),
  password: Cypress.env('USER_PASSWORD'),
}
