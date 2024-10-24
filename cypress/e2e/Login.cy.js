

describe('Login OrangeHRM', () => {

    

    it('Login in to website', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
      cy.get("input[placeholder='Username']").type("Admin")
    })

  })