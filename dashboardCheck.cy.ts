describe("Dashboard test", () => {
  it("Dashboard (graph,table) check", () => {
    cy.visit("/");

    cy.get('input[name="email"]', {timeout: 10000}).should("be.visible").type("john@mail.com");
    cy.get('input[name="password"]').type("pass123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");

    cy.wait(3000);
    cy.get(':nth-child(3) > .MuiPaper-root').scrollIntoView().should('exist');

    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(5)').scrollIntoView().should('exist');

    cy.get('.MuiGrid-container > :nth-child(6)').scrollIntoView().should('exist');

    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(7)').scrollIntoView().should('exist');

    cy.get('.MuiGrid-container > :nth-child(8)').scrollIntoView().should('exist');

    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(9)').scrollIntoView().should('exist');

    cy.get('.MuiGrid-container > :nth-child(10)').scrollIntoView().should('exist');

    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(11)').scrollIntoView().should('exist');

    cy.get('.MuiGrid-container > :nth-child(12)').scrollIntoView().should('exist');

    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(13)').scrollIntoView().should('exist');

  })
})