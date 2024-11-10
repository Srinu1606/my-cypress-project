

import { login } from '../support/editLeave';

describe('Login Functionality', () => {
    beforeEach(() => {
      
        
    });

    it('should log in successfully with valid credentials', () => {
      cy.viewport(1920,1080)
      cy.fixture('loginData').then((data) => {
        const { username, password } = data.validUser//imported from loginData.json file
        // const moduleName = data.validUser
        // const targetDate = 24
        // const targetMonth = 10

        // const targetYear = 2024
        login(username,password);

    });
  })

   
});
