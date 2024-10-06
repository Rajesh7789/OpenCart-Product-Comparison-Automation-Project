class compareProduct{

    // product comparison page to be visible
    compare_page_visible(){
        cy.contains('Product Comparison').should('be.visible');
    }

    // this will  click on the compare product button
    clickCPButton(){
        cy.get('[data-original-title="Compare this Product"]').click();
    }

    // this will check the compare product link is available on the screen
    cp_linkShould_visible(){
        cy.xpath('//*[.="product comparison"]').should('be.visible');
    }

    // it will click on the comaparison link
    clickComparisonLink(){
        cy.xpath('//*[.="product comparison"]').click({force:true});
    }

    // this will verify that add to button is visible inside the comapre product link
    addToCart_should_visible(){
        cy.get('input[class="btn btn-primary btn-block"]').should('be.visible');
    }

    // this will click on the add to cart button
    ClickAddToCart(){
        cy.get('input[class="btn btn-primary btn-block"]').click({force:true});
    }

    // this will verify that remove button is visible on the comare product screen
    remove_should_visible(){
        cy.xpath('//*[.="Remove"]').should('be.visible');
    }

    // this will click on the remove buttton
    clickRemove(){
        cy.xpath('(//a[.="Remove"])[1]').click();
    }

    // this will verify that if the product added to the cart or not
    itemName_should_visible(name){
        cy.contains(name).should('be.visible');
    }

    // this will verify that the product is removed from the comparison
    itemName_should_not_visible(name){
        cy.xpath('//a[.=name]').should('not.exist');
    }



}


export default compareProduct;