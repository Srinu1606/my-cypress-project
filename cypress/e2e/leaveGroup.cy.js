// cypress/integration/login.spec.js

import { login } from '../support/adminloginUtils';  // Import the login function

describe('Login Functionality', () => {
  beforeEach(() => {
    // Prevent Cypress from failing on uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should log in successfully with valid credentials and navigate through modules', () => {
    cy.viewport(1920, 1080); // Set the viewport size for better visibility

    // Load the fixture data
    cy.fixture('leaveGroup').then((data) => {
      // Destructure the necessary data from the fixture
      const { username, password, moduleName, subModules, addNew,leaveGroupName,reason,submit,confirmBtn,addTypes} = data.admin;

      // Call the login function with the required parameters
      login(username, password, moduleName, subModules, addNew,leaveGroupName,reason,submit,confirmBtn,addTypes);
    });
  });
});
