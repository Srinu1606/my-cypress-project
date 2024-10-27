// cypress/support/loginUtils.js

/**
 * Function to log in to the application.
 * @param {string} username - The username for the login.
 * @param {string} password - The password for the login.
 */
export function login(username, password) {
    cy.visit('https://uat.akriviahcm.in'); // Adjust the URL as needed

    cy.get('input[name="username"]') // Adjust selector as needed
        .type(username)
        .should('have.value', username);

    cy.get('input[name="password"]') // Adjust selector as needed
        .type(password)
        .should('have.value', password);

    cy.get('#login') // Adjust selector as needed
        .click();

}


