/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("dataCy", (value) => {
  cy.get(`[data-cy=${value}]`);
});

export {};
