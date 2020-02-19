/// <reference types="cypress" />
describe('Sign In', function() {
  it('should allow a user to sign in', function() {
    cy.visit('/');
    cy.get('input[name=username]').type('testAdmin');
    cy.get('input[name=password]').type('1');
    cy.get('.cy-sign-in-btn').click();
    cy.url().should('include', '/home');
    cy.get('p').contains('home works!');
  });

  it('should allow a user to sign in with extra spaces', function() {
    cy.visit('/');
    cy.get('input[name=username]').type('testAdmin ');
    cy.get('input[name=password]').type('1 ');
    cy.get('.cy-sign-in-btn').click();
    cy.url().should('include', '/home');
    cy.get('p').contains('home works!');
  });

  it('should auto sign in on refresh', function() {
    cy.visit('/');
    cy.get('input[name=username]').type('testAdmin');
    cy.get('input[name=password]').type('1');
    cy.get('.cy-sign-in-btn').click();
    cy.get('p').contains('home works!');
    cy.url().should('include', '/home');
    cy.visit('/');
    cy.get('p').contains('home works!');
    cy.url().should('include', '/home');
  });

  it('should auto sign in within a month', function() {
    window.localStorage.setItem('login', true);
    cy.visit('/');
    cy.get('p').contains('home works!');
    cy.url().should('include', '/home');
  });

  it('should be able to sign out', function() {
    window.localStorage.setItem('login', true);
    cy.visit('/');
    cy.get('p').contains('home works!');
    cy.url().should('include', '/home');
    cy.get('.cy-sign-out').click();
    cy.url().should('include', '/sign-in');
  });

  it('should refresh to the same page', function() {
    window.localStorage.setItem('login', true);
    cy.visit('/');
    cy.url().should('include', '/home');
    cy.get('.other-btn').click();
    cy.url().should('include', '/other-page');
    cy.visit('/other-page');
    cy.wait(500);
    cy.url().should('include', '/other-page');



  });

  afterEach(() => {
    localStorage.clear();
  });
});
