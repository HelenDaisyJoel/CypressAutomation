// Ensure to install 'cypress-iframe' for iframe handling if needed
// import 'cypress-iframe';

describe("Handle Table", () => {
    // Catch the bootstrap error to prevent Cypress from failing the test due to it
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('bootstrap is not defined')) {
            return false; // prevent Cypress from failing the test
        }
        return true;
    });


    it("MouseHover", () => {
        cy.visit("https://demo.opencart.com/");
        // Check the Mac link initially does not exist
        cy.get(".nav-link[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should("be.not.visible");
        // Hover over Desktops menu
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover");
        // Ensure Mac link is now visible and click it
        // cy.get(".nav-link[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should("be.visible").click();
    });

    
    // it("MouseHover",()=>{
    //     cy.visit("https://demo.opencart.com/");
    //     cy.get(".nav-link[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should("be.not.visible");
    //     cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover");
    //     cy.get(".nav-link[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should("be.visible").click();
    
    // });

    it("Right click", () => {
        // Right click (context menu) on the element
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        // Verify the 'Copy' option is visible in the context menu
        cy.get('.context-menu-icon-copy > span').should("be.visible");
    });

    it.skip("Double click", () => {
        // Load iframe page and access elements within it
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");
        cy.frameLoaded('#iframeResult'); // Ensure iframe is loaded
        cy.iframe().find('button[ondblclick="myFunction()"]').dblclick(); // Perform double click on the button inside iframe
        // Add assertion based on your expected behavior inside iframe
    });

});
