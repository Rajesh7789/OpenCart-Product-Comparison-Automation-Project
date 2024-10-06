class registerpage{

    // it enters the first name  
    firstName(firstname){
        cy.get('#input-firstname').type(firstname).should('have.value',firstname);
    }

    // it enters the last name
    lastName(lastname){
        cy.get('#input-lastname').type(lastname).should('have.value',lastname);
    }

    // it enters the emial of the user 
    email(email){
        cy.get('#input-email').type(email).should('have.value',email);
    }

    // it enters the mobile no. of the user
    telephone(telephone){
        cy.get('#input-telephone').type(telephone).should('have.value',telephone);
    }

    // it enters the new password for the user
    password(password){
        cy.get('#input-password').type(password).should('have.value',password);
    }

    // it enters the password to confirm for the user
    confirmPassword(confirm){
        cy.get('#input-confirm').type(confirm).should('have.value',confirm);
    }

    // it will click the yes radion button
    radionYes(yes){
        cy.get('input[value="1"]').check().should('be.checked');
    }

    // it will click the no radion button
    radioNo(no){
        cy.get('input[value="0"]').check().should('be.checked');
    }

    //it will click on the chechk box ment for terms and  condition
    agreeCheckbox(){
        cy.get('[name="agree"]').check().should('be.checked');
    }

    // it will click on the continue button
    continueButton(){
        cy.get('[class="btn btn-primary"]').click();
    }

    linkToLogin(){
        cy.xpath('(//a[.="Login"])[2]').click();
    }

}

export default registerpage;