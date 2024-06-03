describe('References Test', () => {
  it('Add New Reference and Delete', () => {
    cy.visit('/');


    cy.get('input[name="email"]', { timeout: 10000 }).should('be.visible').type('john@mail.com');
    cy.get('input[name="password"]').type('pass123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');


    cy.get('.css-qkvt3p-MuiButtonBase-root-MuiIconButton-root').click();
    cy.get('[href="/dashboard/user/list/"] > .MuiButtonBase-root').click();
    cy.get('.css-6su6fj > .MuiButtonBase-root').click();


    for (let i = 0; i < 5; i++) {
      const randomText1 = randomText();
      const randomText2 = randomUrl();

      cy.get('#\\:rj\\:').type(randomText1);
      cy.get('#\\:rk\\:').type(randomText2);

      cy.get('.css-vo24f1-MuiStack-root > .MuiButtonBase-root').click();
    }

    let nextPageButton = cy.get('.MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17ceore-MuiSvgIcon-root');
    let currentPage = 1;
    while (currentPage <= 10 && nextPageButton.should('be.visible').should('not.have.class', 'disabled')) {
      nextPageButton.click();
      cy.wait(10000);
      nextPageButton = cy.get('.MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17ceore-MuiSvgIcon-root');

      currentPage++;
    }

    cy.get('.MuiTablePagination-actions > [tabindex="0"]').should('not.exist');
    cy.log(`Reached the last page (${currentPage} pages navigated).`);

  });
});

function randomText() {
  const characters = "QWERTZUIOASDFGHJKLYXCVBNMqwertzuiopljhgfdsayxcvbnm";
  let randomText: string = "";
  for (let i = 0; i < 10; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomText;
}

function randomUrl() {
  const protocolOptions = ['http://', 'https://'];
  const domains = ['example.com', 'test.com', 'example.org', 'test.org'];
  const pathCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-/";

  const protocol = protocolOptions[Math.floor(Math.random() * protocolOptions.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];

  let path = "";
  const pathLength = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < pathLength; i++) {
    path += pathCharacters.charAt(Math.floor(Math.random() * pathCharacters.length));
  }

  return protocol + domain + '/' + path;
}
