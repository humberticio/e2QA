describe('User Profile Test', () => {
  it('Edit User Profile', () => {
    cy.visit('/');

    cy.get('input[name="email"]', {timeout: 10000}).should('be.visible').type('john@mail.com');
    cy.get('input[name="password"]').type('pass123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');

    cy.get('.MuiButtonBase-root > .MuiAvatar-root > .MuiAvatar-img').click();
    cy.get('.css-1ludl2-MuiStack-root > :nth-child(2)').click();

      const randomText1 = randomText();
      const randomText2 = randomText();
      const randomText3 = randomText();
      const randomText4 = randomNumber();

    cy.get('#\\:r5\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText1);
    });

    cy.get('#\\:r8\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText2);
    });

    cy.get('#\\:r9\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText4);
    });

    cy.get('#\\:ra\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText3);
    });

    cy.get('#\\:rb\\:').click();
  });
});

function randomText() {
  const characters = "AEIOUTRNMYPLKJGHaeioutrnmyplkjgh";
  let randomText = "";
  for(let i = 0; i < 10; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomText;
}

function randomNumber() {
  const characters = "134567890";
  let randomNumber = "";
  for(let i=0; i < 5; i++) {
    randomNumber += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomNumber;
}