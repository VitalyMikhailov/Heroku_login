import Login from '../support/pageObject/login.page'
import LogedIn from '../support/pageObject/logedIn.page'
import DataJson from '../fixtures/data.json'



describe('Test Login Functionality', () => {
    function loginPageElemsCheck () {
        Login.loginHead().should('contain.text', DataJson.loginHead);
        Login.loginSubhead().should('contain.text', DataJson.loginSubhead);
        Login.usernameLabel().should('contain.text',DataJson.usernameLabel);
        Login.passwordLabel().should('contain.text',DataJson.passwordLabel);
    }

    function securePageElemsCheck(){
        cy.url().should('equal',DataJson.secureUrl);
        LogedIn.successMessage().should('contain.text',DataJson.successSign);
        LogedIn.secureHead().should('contain.text',DataJson.secureHead);
        LogedIn.secureSubhead().should('contain.text',DataJson.secureSubhead);
    }


    beforeEach(()=> {
        cy.visit("login");
    })

    it ('Checking all elements on Login page presented and correct', ()=>{
        loginPageElemsCheck();
    })

    it('Sign in with valid credentials, pressing enter',  ()=> {
        cy.loginEnter(DataJson.username, DataJson.password);
        securePageElemsCheck();
    })

    it('Sign in with valid credentials and clicking Login button', ()=> {
        cy.loginButton(DataJson.username, DataJson.password);
        securePageElemsCheck();
    })

    it('Sign in with invalid username',  ()=> {
        cy.loginEnter(DataJson.invalidUsername, DataJson.password);
        Login.errorMessage().should('contain.text',DataJson.usernameError);
    })

    it('Sign in with invalid password',  ()=> {
        cy.loginEnter(DataJson.username, DataJson.invalidPassword);
        Login.errorMessage().should('contain.text',DataJson.passwordError);
    })

    it ('Checking that after login possible to logout', ()=>{
        cy.loginButton(DataJson.username, DataJson.password);
        securePageElemsCheck();

        LogedIn.logoutButton().click();
        loginPageElemsCheck();
    })

})