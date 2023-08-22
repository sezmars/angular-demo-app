describe('Initial Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('User Weather App');
  });
});

describe('Card Navigation', () => {
  it('should navigate to details page when clicking "Details" button', () => {
    cy.visit('/');

    cy.get('.btn.primary').contains('Details').click();

    cy.url().should('include', '/profile');
  });
});

describe('Back Navigation', () => {
  it('should navigate to list page when clicking "Back" button', () => {
    cy.get('.btn.back').contains('🔙 ').click();

    cy.url().should('include', '/list');
  });
});

describe('Tab Navigation', () => {
  it('should navigate to viewed page when clicking "Viewed" tab', () => {
    cy.visit('/');

    cy.get('.tabs__tab-btn').contains('Viwed').click();

    cy.url().should('include', '/viewed');
  });
});

describe('Clear Viwed List', () => {
  it('should navigate to viewed page and clicking "❌" button', () => {
    cy.get('.btn.clear').contains('❌').click();

    cy.contains('No saved users');
  });
});

describe('Click Card Animation', () => {
  it('should click to card and check animation', () => {
    cy.visit('/');

    cy.get('a[title="Animation"]').eq(0).click({ force: true });
  });
});
