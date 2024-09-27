describe('example to-do app', () => {
    it('Test1',()=>{

        cy.visit('https://tutorialsninja.com/demo/');
        cy.title().should("eq","Your Store");
    
        // cy.url().should("include","tutorialsninja.com");
        // cy.url().should("eq","https://tutorialsninja.com/demo/");
        // cy.url().should("contains","tutorialsninja");

        cy.url().should("include","tutorialsninja.com")
        .should("eq","https://tutorialsninja.com/demo/")
        .should("contains","tutorialsninja");


    }
    )
    
      
    })
  