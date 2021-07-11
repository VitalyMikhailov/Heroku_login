
class LoginPage {
    loginHead()
    {
        return cy.get('h2');
    }

    loginSubhead()
    {
        return cy.get('.subheader');
    }

    usernameLabel()
    {
        return cy.get('[for="username"]');
    }

    usernameInput()
    {
        return cy.get('#username');
    }

    passwordLabel()
    {
        return cy.get('[for="password"]');
    }

    passwordInput()
    {
        return cy.get('#password');
    }

    loginButton()
    {
        return cy.get('[type="submit"]');
    }

    errorMessage()
    {
        return cy.get('.error');
    }

}

export default new LoginPage()