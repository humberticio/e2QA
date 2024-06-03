// @ts-ignore
describe('Maturity Level Test', () => {
  it ('Add New Maturity Level', () => {

    cy.visit('/');

    cy.get('input[name="email"]', { timeout: 10000 }).should('be.visible').type('john@mail.com');
    cy.get('input[name="password"]').type('pass123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');

    cy.get('.css-qkvt3p-MuiButtonBase-root-MuiIconButton-root').click();
    cy.get('[href="/dashboard/user/maturityLevel/"] > .MuiButtonBase-root').click();
    cy.get('.css-6su6fj > .MuiButtonBase-root').click();

        const randomText1 = randomText();
        const randomText2 = randomText();
        const randomText3 = randomText();
        const randomText4 = randomNumber();

    cy.get('#\\:rj\\:').type(randomText1);
    cy.get('#\\:rk\\:').type(randomText2);
    cy.get('#\\:rl\\:').type(randomText3);
    cy.get('#\\:rm\\:').type(randomText4);

  //  cy.get('.css-vo24f1-MuiStack-root > .MuiButtonBase-root').click();

    cy.get('.MuiTablePagination-actions > [tabindex="0"]').click();
  //  cy.get(':nth-child(3) > .MuiTableCell-alignRight > .MuiButtonBase-root').click();
    cy.get('.MuiDialogActions-root > .MuiButton-contained').click();
  });
});


function randomText() {
  const characters = "QWERTZUIOASDFGHJKLYXCVBNMqwertzuiopljhgfdsayxcvbnm";
  let randomText: string = "";
  for(let i = 0; i < 10; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
    return randomText;
  }

function randomNumber() {
  const characters = "13456789";
  let randomNumber = "";
  for(let i = 0; i < 3; i++) {
    randomNumber += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomNumber;
}


