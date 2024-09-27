describe('example to-do app', () => {
    it('Test1',()=>{

        cy.visit('https://tutorialsninja.com/demo/');
        cy.title().should("eq","Your Store");
    
        cy.get("#search").type("iPhone");
        cy.get("button[class='btn btn-default btn-lg']").click();
        cy.get("div[class='caption'] h4 a").contains("iPhone")


    }
    )
    
      
    })
  