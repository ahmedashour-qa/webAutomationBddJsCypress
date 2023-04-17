import { Given, And, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import basePage from '../e2e/pages/basePage';
import basePage from '../pages/basePage';
import countries from '../pages/countries';
import plans from '../pages/plans';

const BasePage = new basePage();
const countriesPage = new countries();
const plansPage = new plans();

Given('User at Subscribtion page', () => {
  BasePage.siteVisit();
});

When('User clicks on country select button in header', () => {
  if (Cypress.config('viewportWidth') == 390 && Cypress.config('viewportHeight') == 844) {
    BasePage.getBurgerMenu().click({ force: true });
    BasePage.getHeaderSwitchCountryBtn().click({ force: true });
  } else {
    BasePage.getHeaderSwitchCountryBtn().click({ force: true });
  }
});
When('User selects {string} from countries list', (country) => {
  if (country == 'Saudi Arabia') {
    countriesPage.elements.KSA().click();
  } else if (country == 'Bahrain') {
    countriesPage.elements.Bahrain().click();
  } else if (country == 'Kuwait') {
    countriesPage.elements.Kuwait().click();
  }
});
Then('User shall find the avaliable plan types', () => {
  plansPage.elements
    .litePlan()
    .should('have.text', plansPage.Localization.plans.lite[plansPage.lang]);
  plansPage.elements
    .classicPlan()
    .should('have.text', plansPage.Localization.plans.classic[plansPage.lang]);
  plansPage.elements
    .premiumPlan()
    .should('have.text', plansPage.Localization.plans.premium[plansPage.lang]);
});

Then(
  'User shall find the avaliable {string} plan with price of {string} of {string} for {string} page',
  (plan, price, currancy, country) => {
    let lang = plansPage.lang;

    const planElements = {
      lite: [plansPage.elements.litePlanPrice, plansPage.elements.litePlanCurrency],
      classic: [plansPage.elements.classicPlanPrice, plansPage.elements.classicPlanCurrency],
      premium: [plansPage.elements.premiumPlanPrice, plansPage.elements.premiumPlanCurrency],
    };

    const [priceElement, currencyElement] = planElements[plan.toLowerCase()];

    switch (country) {
      case plansPage.Localization.countries['Saudi Arabia'][lang]:
      case plansPage.Localization.countries.Bahrain[lang]:
      case plansPage.Localization.countries.Kuwait[lang]:
        priceElement().should('have.text', price);
        currencyElement().should('have.text', plansPage.Localization.currencies[currancy][lang]);
        break;
      default:
    }
  },
);
