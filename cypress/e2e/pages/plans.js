/// <reference types="cypress" />
import BasePage from './basePage';

export default class plans extends BasePage {
  // Elements Locators
  elements = {
    litePlan: () => cy.get(`#name-${this.Localization.plans.lite[this.lang].toLowerCase()}`),
    classicPlan: () => cy.get(`#name-${this.Localization.plans.classic[this.lang].toLowerCase()}`),
    premiumPlan: () => cy.get(`#name-${this.Localization.plans.premium[this.lang].toLowerCase()}`),
    litePlanPrice: () =>
      cy.get(`#currency-${this.Localization.plans.lite[this.lang].toLowerCase()}`).find('b'),
    classicPlanPrice: () =>
      cy.get(`#currency-${this.Localization.plans.classic[this.lang].toLowerCase()}`).find('b'),
    premiumPlanPrice: () =>
      cy.get(`#currency-${this.Localization.plans.premium[this.lang].toLowerCase()}`).find('b'),
    litePlanCurrency: () =>
      cy.get(`#currency-${this.Localization.plans.lite[this.lang].toLowerCase()}`).find('i'),
    classicPlanCurrency: () =>
      cy.get(`#currency-${this.Localization.plans.classic[this.lang].toLowerCase()}`).find('i'),
    premiumPlanCurrency: () =>
      cy.get(`#currency-${this.Localization.plans.premium[this.lang].toLowerCase()}`).find('i'),
  };
}
