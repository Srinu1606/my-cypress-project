
export function visitLoginPage() {
    cy.visit('http://localhost:3000/logi'); 
    
    cy.get('input#username').clear().type(username);
    cy.get('input#password').clear().type(password);


    cy.get('button[type="submit"]').click();
}




