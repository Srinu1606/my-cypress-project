// cypress/support/loginUtils.js

/**
 * Function to log in to the application.
 * @param {string} username - The username for the login.
 * @param {string} password - The password for the login.
 * 
 */
import { selectors } from './selectors';

export function login(username, password) {
    cy.visit(selectors.url); // Adjust the URL as needed

    cy.get(selectors.inputUsername) // Adjust selector as needed
        .type(username)
        .should('have.value', username);

    cy.get(selectors.inputPassword) // Adjust selector as needed
        .type(password)
        .should('have.value', password);

    cy.get(selectors.buttonSubmit) // Adjust selector as needed
        .click();

}


