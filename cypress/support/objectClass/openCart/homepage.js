class homepage{



    // this will click on homepage button
    homepage(){
        cy.xpath('//a[.="Qafox.com"]').click();
    }

    // it will visit the website
    visit(){
        cy.visit("https://tutorialsninja.com/demo/")
    }

    // it click on the My Account button
    myAccount(){
        cy.get('.dropdown > .dropdown-toggle > .fa').click();
    }

    clickRegister(){
        cy.xpath('//a[.="Register"]').click();
    }

    clickLogin(){
        cy.xpath('//a[.="Login"]').click();
    }

    // it click on the wishlist button
    wishList(){
        cy.xpath("//*[.='Wish List (0)']").click();
    }

    // it clicks on the shoping cart button 
    shopingCart(){
        cy.xpath("//*[.='Shopping Cart']").click();
    }
    
    // it clicks on the checkout boutton on the homepage
    checkOut(){
        cy.xpath("//*[.='Checkout']").click();
    }

    compareButtonMacBook(){
        cy.xpath('(//button[@data-original-title="Compare this Product"])[1]').click({force:true});
    }

    compareButtonIphone(){
        cy.xpath('(//button[@data-original-title="Compare this Product"])[2]').click({force:true});
    }
    compareButtonAppleCinema(){
        cy.xpath('(//button[@data-original-title="Compare this Product"])[3]').click({force:true});

    }
    compareButtonCanon(){
        cy.xpath('(//button[@data-original-title="Compare this Product"])[4]').click({force:true});

    }

}

export default homepage;