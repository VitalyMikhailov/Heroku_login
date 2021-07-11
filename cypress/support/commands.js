import Login from "./pageObject/login.page";

//login with Enter pressing
Cypress.Commands.add('loginEnter', (login, password) => {
    Login.usernameInput().type(login);
    Login.passwordInput().type(password).type('{enter}');
})

//login with "Login" button clicking
Cypress.Commands.add('loginButton', (login, password) => {
    Login.usernameInput().type(login);
    Login.passwordInput().type(password);
    Login.loginButton().click();
})