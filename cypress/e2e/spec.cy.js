

import { login } from '../support/loginUtils';

describe('Login Functionality', () => {
    beforeEach(() => {
        
    });

    it('should log in successfully with valid credentials', () => {
      cy.fixture('loginData').then((data) => {
        const { username, password } = data.validUser
        login(username,password); //login user

    });
  })

   
});
