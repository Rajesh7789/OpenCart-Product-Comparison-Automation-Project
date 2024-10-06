class loginpage{

    // it enters the mail id for login
    enterEmail(email){
        cy.get('#input-email').type(email).should('have.value',email);
    }

    // it enters the password for login
    enterPassword(password){
        cy.get('#input-password').type(password).should('have.value',password);
    }

    // it clicks on the login button 
    loginButton(){
        cy.get('[value="Login"]').click();
    }

    // it clicks on the forgot password link
    forgotPassword(){
        cy.xpath('(//*[.="Forgotten Password"])[1]').click();
    }

    // it clicks on the register new account continue button
    registerNewAccout(){
        cy.xpath('//* [.="Continue"]').click();
    }
}


export default loginpage;