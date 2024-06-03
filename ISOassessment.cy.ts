describe('ISO assessment', () => {
  it ('ISO assessment check', () => {
    cy.visit('/');

    cy.get('input[name="email"]', { timeout: 10000}).should("be.visible").type("john@mail.com");
    cy.get('input[name="password"]').type('pass123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.get('.css-qy2qla-MuiStack-root > .MuiButtonBase-root').click();
    cy.get('.css-1qb952s').click();
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiPaper-root').click();


    cy.get(':nth-child(1) > .MuiPaper-root > .MuiBox-root > .MuiTypography-h6', {timeout:10000}).click();

    //  Policy Level
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]').scrollIntoView().click({force: true});
    cy.get('#\\:r7\\:-option-2').click();
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiBox-root > .css-l0fger-MuiStack-root > .MuiButtonBase-root').click({ force: true });;

    // Practice Level
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]').scrollIntoView().click({force: true});
    cy.get('#\\:r9\\:-option-3').click();
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiBox-root > .css-l0fger-MuiStack-root > .MuiButtonBase-root').click({ force: true });;

    // Target Score
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]').scrollIntoView().click({force: true});
    cy.get('#\\:rb\\:-option-4').click();
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiBox-root > .css-l0fger-MuiStack-root > .MuiButtonBase-root').click({ force: true });;

    const randomText1 = randomNumber();
    const randomText2 = randomNumber();
    const randomText3 = randomText();
    const randomText4 = randomText();
    const randomText5 = randomText();
    const randomText6 = randomUrl();

    cy.get('#\\:rd\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wait(100);
      cy.wrap($input).type(randomText1);

      cy.get(':nth-child(6) > .MuiPaper-root > .css-1260jbm-MuiStack-root > .MuiButtonBase-root').click({ force: true });;
    });

    cy.get('#\\:re\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wait(100);
      cy.wrap($input).type(randomText2);
      cy.get(':nth-child(7) > .MuiPaper-root > .css-1260jbm-MuiStack-root > .MuiButtonBase-root').click({ force: true });;
    });

    cy.get('[style="padding-right: 50px;"] > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]').scrollIntoView().click({force: true});
    cy.get('#\\:rf\\:-option-1').click();
    cy.get(':nth-child(8) > .MuiPaper-root > .css-1260jbm-MuiStack-root > .MuiButtonBase-root').click({ force: true });;

    cy.get('#\\:rh\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText3);
      cy.wait(100);
      cy.get(':nth-child(10) > .MuiPaper-root > .MuiBox-root > .css-1fp7y8o-MuiStack-root > .MuiButtonBase-root').click();
    });

    cy.get('#\\:ri\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText4);
      cy.wait(100);
      cy.get(':nth-child(11) > .MuiPaper-root > .MuiBox-root > .css-1fp7y8o-MuiStack-root > .MuiButtonBase-root').click();
    });

    cy.get('.css-kad7v2 > .MuiButtonBase-root').click();
    cy.get('#\\:rk\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText5);
      cy.wait(100);
    });
    cy.get('#\\:rl\\:').then($input => {
      cy.wrap($input).type('{selectAll}{backspace}');
      cy.wrap($input).type(randomText6);
      cy.wait(100);
    });
    cy.get('.css-vo24f1-MuiStack-root > .MuiButtonBase-root').click();

    let generatedTexts: string[] = [];

    generatedTexts.push(randomText1);
    generatedTexts.push(randomText2);
    generatedTexts.push(randomText3);
    generatedTexts.push(randomText4);
    generatedTexts.push(randomText5);
    generatedTexts.push(randomText6);

    cy.log('Generated Random Texts and Numbers:');
    cy.log(generatedTexts.join(', '));

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
  const characters = "13456789";
  let randomNumber = "";
  const numberOfDigits = Math.floor(Math.random() * 3) + 1;
  for(let i= 0; i < numberOfDigits; i++) {
    randomNumber += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomNumber;
}

function randomUrl() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 10; 
  let url = 'http://example.com/';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    url += characters[randomIndex];
  }
  return url;
}
