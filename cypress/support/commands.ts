declare namespace Cypress {
  interface Chainable {
    visitByMobile(): void;
  }
}

Cypress.Commands.add('visitByMobile', () => {
  cy.viewport(400, 830);
  cy.visit('/');
});
