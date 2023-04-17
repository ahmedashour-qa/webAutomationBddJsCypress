/// <reference types="cypress" />

import * as Localization from '../../fixtures/localization.json';

export default class basePage {
  constructor() {
    this.Localization = Localization;
    this.lang = Cypress.env('lang');
  }

  getHeaderSwitchCountryBtn() {
    return cy.get('#country-btn');
  }
  siteVisit() {
    cy.visit(Cypress.env('KSA') + '-' + Cypress.env('lang'));
  }
  getBurgerMenu() {
    return cy.get('#ham-menu');
  }
  getCountryLbl() {
    return cy.get('#country-name');
  }
}
