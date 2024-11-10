// cypress/support/adminloginUtils.js

import { adminSelectors } from './leavegroupSelectors'; // Import selectors

export function login(username, password, moduleName, subModules, addNew,leaveGroupName,reason,confirmBtn) {
  cy.visit(adminSelectors.url);

  cy.get(adminSelectors.inputUsername)
    .type(username)
    .should('have.value', username);

  cy.get(adminSelectors.inputPassword)
    .type(password)
    .should('have.value', password);

  cy.get(adminSelectors.buttonSubmit)
    .click();

  cy.wait(2000); // Wait for login to complete
  
  // Module selection
  cy.get(adminSelectors.moduleSelection).each(($el) => {
    cy.log($el.text().replace(" ", "").toLowerCase());  // Log the text to inspect it
    if ($el.text().toLowerCase().includes(moduleName.toLowerCase())) {  
      cy.wrap($el).click();
    }
  });

  // Sub-module selection
  cy.get(adminSelectors.subScreen).each(($li) => {
    if ($li.text().toLowerCase().includes(subModules.toLowerCase())) {  
      cy.wrap($li).click();
    }
  });
  cy.wait(2000)
  // "Add New" selection
  cy.get(adminSelectors.buttonSubmit).each(($li) => {
    if ($li.text().toLowerCase().includes(addNew.toLowerCase())) {  
      cy.wrap($li).click();
    }
  });
  cy.get(adminSelectors.leaveGroup).type(leaveGroupName)
  cy.get(adminSelectors.description).type(reason)
  cy.wait(1000)
  cy.get(adminSelectors.requestSubmit).click()
  cy.wait(2000)
  cy.contains('button', 'Confirm').click();
  cy.get(adminSelectors.closee).click()
   cy.get(adminSelectors.buttonSubmit).each(($li) => {
    if ($li.text().toLowerCase().includes(addNew.toLowerCase())) {  
      cy.wrap($li).click();
    }
  });
}
