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

        cy.title().should("eq","Your Store")
        .should("include","Store")
        .should("contains","our");

        cy.get("a[title='My Account']").click();
        cy.get("a[href='https://tutorialsninja.com/demo/index.php?route=account/login']").click();

        cy.get("#input-email").type("Testing67@gmail.com");
        cy.get("#input-email").should("should.have", "Testing67@gmail.com");
        cy.get("#input-password").type("Testing67");
        
        cy.get("input[value='Login']").click();

        let expectedName="XYZ";

        cy.get("ID").then((x) => {
            let actName=x.text();
            // BDD Style Assertion   https://docs.cypress.io/guides/references/assertions
            expect (actName).to.equal(expectedName)
            expect (actName).to.not.equal(expectedName)

            // TDD Style
            assert.equal(actName,expectedName)
            assert.notEqual(actName,expectedName)
        }).catch((err) => {
            
        });

    }
    )
    
     
    })
  