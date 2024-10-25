

describe('Login OrangeHRM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
  });

    it('Login in to website', () => 
    {
      cy.contains('PIM').click();
    })

  })