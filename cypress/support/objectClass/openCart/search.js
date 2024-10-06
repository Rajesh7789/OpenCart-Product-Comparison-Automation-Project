class search{
    searchBox = "input[placeholder='Search']";
    seaarIcon = 'button[class="btn btn-default btn-lg"]'

    type(enter){
        cy.get(this.searchBox).clear().type(enter);
    }

    clickSearch(){
        cy.get(this.seaarIcon).click();
    }
}

export default search;