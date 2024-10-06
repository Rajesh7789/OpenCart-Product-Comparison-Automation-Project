class logout{

    clickLogout(){
        cy.xpath('//a[.="Logout"]').click();
    }
}

export default logout;