# Order Placement Test Automation for eshop.zasilkovna.cz

This project automates the order placement process on [eshop.zasilkovna.cz](https://eshop.zasilkovna.cz) using Cypress. The test covers the following scenarios:

1. **Order as a Logged-In User:** Log in with a registered account, add a glass engraved with the Packet logo to the cart, and proceed to the payment gateway.
2. **Order as a Guest User:** Add a glass engraved with the Packet logo to the cart and proceed to the payment gateway without logging in.

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- [Cypress](https://www.cypress.io/) installed (Run `npm install cypress` if not yet installed)

## Setup

1. Clone this repository.
2. Navigate to the project directory and install dependencies:
   `bash npm install`

## Runing Tests

1. Running headless `npx run cyStart`
1. Running in debuging mode `npx run cyOpen`
