/// <reference types="cypress" />

import BasePage from './basePage';

export default class countries extends BasePage {
  // Elements Locators
  elements = {
    KSA: () => cy.get('#sa'),
    Bahrain: () => cy.get('#bh'),
    Kuwait: () => cy.get('#kw'),
  };
}
