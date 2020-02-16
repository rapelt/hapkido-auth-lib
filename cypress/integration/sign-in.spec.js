/// <reference types="cypress" />
describe('Sign In', function() {
  it('should allow a user to sign in', function() {
    cy.visit('/');
    cy.get('input[name=username]').type('testAdmin');
    cy.get('input[name=password]').type('1');
    cy.get('.cy-sign-in-btn').click();
    cy.get('.auth-signed-in').contains('I am logged in');
  });

  it('should allow a user to sign in with extra spaces', function() {
    cy.visit('/');
    cy.get('input[name=username]').type('testAdmin ');
    cy.get('input[name=password]').type('1 ');
    cy.get('.cy-sign-in-btn').click();
    cy.get('.auth-signed-in').contains('I am logged in');
  });

  it('should auto sign in on refresh', function() {
    cy.visit('/');
    cy.get('input[name=username]').type('testAdmin');
    cy.get('input[name=password]').type('1');
    cy.get('.cy-sign-in-btn').click();
    cy.get('.auth-signed-in').contains('I am logged in');
    cy.visit('/');
    cy.get('.auth-signed-in').contains('I am logged in');
  });

  it('should auto sign in within a month', function() {
    window.localStorage.setItem('login', true);
    cy.visit('/');
    cy.get('.auth-signed-in').contains('I am logged in');
  });

  it('should be able to sign out', function() {
    window.localStorage.setItem('login', true);
    cy.visit('/');
    cy.get('.auth-signed-in').contains('I am logged in');
    cy.get('.cy-sign-out').click();
  });

  afterEach(() => {
    localStorage.clear();
  });
});
