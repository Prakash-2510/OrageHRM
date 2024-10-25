
class LoginPage {
    usernameInput = 'input[name="username"]';
    passwordInput = 'input[name="password"]';
    loginButton = 'button[type="submit"]';
    alertMessage = '.oxd-alert-content-text';
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com');
    }
    enterUsername(username) {
        cy.get(this.usernameInput).type(username);
    }
    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }
    clickLogin() {
        cy.get(this.loginButton).click();
    }
    getAlertMessage() {
        return cy.get(this.alertMessage);
    }
}

export default new LoginPage();
