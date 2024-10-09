describe("Handle Table", () => {

    beforeEach("Login", () => {
        cy.visit("https://demo.opencart.com/admin/index.php");
        // Uncomment and enter correct login credentials if needed
        // cy.get("#input-username").type("demo");
        // cy.get("#input-password").type("demo");

        cy.get("button[type='submit']").click();
        // If a popup appears, handle it
        // cy.get(".btn-close").click();
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();
    });

    it("Check number of rows and columns", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
          .should("have.length", 10);
    });

    it("Read fifth row details from the first page", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
          .should("contain.text", "hdxj@gjsk.com"); // Adjust the email string as needed
    });

    it("Read all rows and columns from the first page", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text());
                });
            });
        });

        let totalpages = 5;
        for (let p = 1; p <= totalpages; p++) {
            if (totalpages > 1) {
                cy.log("Active Page===" + p);
                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
            }
        }
    });

    it("Pagination", () => {
        let totalPage;
        cy.get(".col-sm-6.text-end").then((e) => {
            let mytext = e.text();  // Extract total pages (e.g., "Showing 1 to 10 of 7031 (704 Pages)")
            totalPage = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf(" Pages"));
            cy.log(totalPage);
        });

        // For total pages navigation example:
        // for (let p = 1; p <= totalPage; p++) {
        //     if (totalPage > 1) {
        //         cy.log("Active Page===" + p);
        //         cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        //     }
        // }
    });

});
