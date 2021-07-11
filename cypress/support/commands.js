import Login from "./pageObject/login.page";
import DataJson from "../fixtures/data.json";

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