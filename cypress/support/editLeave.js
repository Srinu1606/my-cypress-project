


import { selectors } from './editleaveSelectors';//imported  from selectors.js file

export function login(username, password) {
    cy.visit(selectors.url);

    cy.get(selectors.inputUsername) 
        .type(username)
        .should('have.value', username);

    cy.get(selectors.inputPassword)
        .type(password)
        .should('have.value', password);

    cy.get(selectors.buttonSubmit)
        .click();
    cy.wait(10000)
    cy.get(selectors.moduleSelection)
    .each(($el) => {
      cy.log($el.text().replace(" ","").toLowerCase());  // Log the text to inspect it
      if ($el.text().includes("Leave management")) {
        cy.wrap($el).click();
      }
    });
    cy.get(selectors.subScreen).click()
    cy.get(selectors.requestBtn).eq(1).click()
    // cy.get(selectors.cancelBtn).click()
    // cy.get(selectors.cancelCheckbox).each(($ch)=>{
    //     if(($ch).text().includes("2024/10/03")){
    //         cy.wrap($ch).click()
    //     }
    // })
    cy.get(selectors.editBtn).click()
    cy.wait(8000)
    cy.get(selectors.applyBtn).click()
    cy.get(selectors.acceptBtn).click()
    cy.get(selectors.closeBtn).click()


    // cy.get(selectors.reason).eq(0).type('reason')
    // cy.get(selectors.confirmBtn).each(($co)=>{
    //     if(($co).text().includes("Confirm")){
    //         cy.wrap($co).click()
    //     }
    // })
    

    //cy.get(selectors.cancelCheckbox).scrollIntoView().click()   

    // cy.get(selectors.leavetypeName).click()
    // const targetMonth = 'October'; 
    

    // // Loop until the correct month/year is found
    // cy.get('.ui-datepicker-month').then(($month) => {
    //   let currentMonth= $month.text();

    //   
    //   while (!currentMonth.includes(targetMonth)) {
    //     if (currentMonth < `${targetMonth} `) {
    //       // Click "Next" to move forward
    //       cy.get('.ui-datepicker-next-icon').click();
    //     } else {
    //       // Click "Previous" to move backward
    //       cy.get('.ui-datepicker-prev-button').click();
    //     }

    //     
    //     cy.wait(500);  // Optional: Adjust the wait time if needed to ensure the UI updates
    //     cy.get('.ui-datepicker-month').then(($newMonth) => {
    //       currentMonth= $newMonth.text();
    //     });
    //   }

    //   // Once the desired month/year is found, assert that it's correct
    //   cy.get('.ui-datepicker-month').should('contain', `${targetMonth}`);
    // });
  

    
    
  

}


