describe('Filter List by Category', () => {
  it('should show only list items with non-empty categories', () => {
    cy.visit('/');
    cy.get('input[name="email"]', {timeout:10000}).should('be.visible').type('john@mail.com');
    cy.get('input[name="password"]').type('pass123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.get('.css-qkvt3p-MuiButtonBase-root-MuiIconButton-root').click();
    cy.get('[href="/dashboard/user/contacts/"] > .MuiButtonBase-root').click();
    cy.url().should('include', '/dashboard/user/contacts/');

    cy.get('.MuiContainer-root').then(($pagination) => {
      const totalPages = $pagination.find('.MuiTablePagination-actions > [tabindex="0"]').length;

      for (let page = 1; page <= totalPages; page++) {
        cy.get('.MuiTablePagination-actions > [tabindex="0"]').contains(page).click();

        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').each(($li) => {
          const categoryCell = $li.find('.MuiTableBody-root > :nth-child(1) > :nth-child(2)');

          if (categoryCell.text().trim() !== '') {
            cy.wrap($li).should('be.visible');
          } else {
            cy.wrap($li).should('not.be.visible');
          }
        });
      }
    });
  });
});
