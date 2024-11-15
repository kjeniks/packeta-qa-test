# Order Placement Test Automation for eshop.zasilkovna.cz

This project automates the order placement process on [eshop.zasilkovna.cz](https://eshop.zasilkovna.cz) using Cypress. The test covers the following scenarios:

1. **Order as a Logged-In User:** Log in with a registered account, add a glass engraved with the Packet logo to the cart, and proceed to the payment gateway.
2. **Order as a Guest User:** Add a glass engraved with the Packet logo to the cart and proceed to the payment gateway without logging in.

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- [Cypress](https://www.cypress.io/) installed (Run `npm install cypress` if not yet installed)
- You need create your own `.env` file with following parameters `'USER_EMAIL'` & `'USER_PASSWORD'` to be able to run the test with logged user.

## Setup

1. Clone this repository.
2. Navigate to the project directory and install dependencies:
   `bash npm install`

## Runing Tests

1. Running headless `npm run cyStart`
2. Running in debuging mode `npm run cyOpen`
3. You can run pipelines here in Github Actions
