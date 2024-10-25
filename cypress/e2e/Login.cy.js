import LoginPage from '../PageObject/Loginpage'
describe('OrangeHRM Login Test', () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it('should log in successfully with valid credentials', () => {
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });
  it('should show an error message with invalid credentials', () => {
    LoginPage.enterUsername('InvalidUser');
    LoginPage.enterPassword('InvalidPassword');
    LoginPage.clickLogin();
    LoginPage.getAlertMessage().should('contain', 'Invalid credentials');
  });
});
