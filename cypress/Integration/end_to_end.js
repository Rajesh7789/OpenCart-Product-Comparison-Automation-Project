
// importing the class to use them in our test script
import registerpage from "../support/objectClass/openCart/registerpage";
import loginpage from "../support/objectClass/openCart/loginpage";
import homepage from "../support/objectClass/openCart/homepage";
import compareProduct from "../support/objectClass/openCart/compareProduct";
import search from "../support/objectClass/openCart/search";
import logout from "../support/objectClass/openCart/logout";

// creating object of the respective class outside of the describe block to use them in multiple describe block
const rp = new registerpage();
const lp = new loginpage();
const hp = new homepage();
const cp = new compareProduct();
const sh = new search();
const lg = new logout();


describe('register an account and check product comparison',()=>{
    
    // before block will exicute only once before the test script 
    before(()=>{
        cy.fixture("opencart").then((data)=>{                       // calling fixture function for data driven testing

            hp.visit();                                 // this will visit the target website
            hp.myAccount();                             // this will click on the my account section
            hp.clickRegister();                         // this will click on the register button

            rp.firstName(data.firstName);               // this will first name in the registration form
            rp.lastName(data.lastName);                 // this will enter last name in the registration form
            rp.email(data.email);                       // this will enter email in the registration form 
            rp.telephone(data.telephone);               // this will enter telephone in the registration form
            rp.password(data.password);                 // this will enter password 
            rp.confirmPassword(data.password);          // this will confirm the password 
            rp.radioNo();                               // this will click the  no radion button 
            rp.agreeCheckbox();                         // this will click on the checkbox 
            rp.continueButton();                        // this will click on the continue button on the registration form
            cy.wait(2000);
            hp.homepage();                              // click on the homepage button
            


        })
    })

    
    // after block exicute only once after the test script
    after(()=>{                                     
        hp.myAccount();                         // click on homepage
        lg.clickLogout();                       // click on logout
    })


    // test case starts from here 
    it('Verify Product Comparison Button on newly created account',()=>{
        sh.type('HP LP3065')                            // type a available product in the search textbox field 
        sh.clickSearch();                               // click on the search icon
        cp.clickCPButton();                             // after displaying the product click on the product comparison button
        cp.cp_linkShould_visible();                     // asserting the added product to comparison message
        cp.clickComparisonLink();                       // click on the comparison link
        cp.compare_page_visible();                      // poduct comaparison page should be visible to the user
        cp.itemName_should_visible('HP LP3065');        // verifying the selected product is displayed under product comparison 

    })


})

// another describe block for testing the compare product functionality for existing customer
describe('product compare functionality testing on existing account', () => {
    let data;                                           // intialising a variable to perform data driven testing
    
    
    // in this before block we will fetch the data from our json fixture file and intialise them to data variabel
    // this will run only once
    before(()=>{
        cy.fixture("opencart").then((userdata)=>{      
            data = userdata;
        })
    })

    // this block will run everytime  before exicuting a test script.
    // this will do the login to the website 
    beforeEach(()=>{
        hp.visit();
        hp.myAccount();
        hp.clickLogin();
        lp.enterEmail(data.email);                  // this will take the data from the fixture file and enter in the email textbox 
        lp.enterPassword(data.password);            // this will take the data from password section and enter in the password textbox
        lp.loginButton();                           // click on login button 
        hp.homepage();                              // click on homepage
        
    })

    // after each test script this will logout from the website
    afterEach(()=>{
        hp.myAccount();
        lg.clickLogout();
        hp.homepage();
    })



    it('Verify "Add to Cart" and "Remove" Buttons After Adding Product to Comparison', () => {
        sh.type(data.product1);                               // enter the product data from fixture file 
        sh.clickSearch();                                     // click on search button
        cp.clickCPButton();                                   // click on the comapare product button
        cp.cp_linkShould_visible();                           // verify product comparison link should be visible
        cp.clickComparisonLink();                             //  click on the link
        cp.compare_page_visible();                            // comparison page should be visible
        cp.itemName_should_visible(data.product1);            // assert the product is visible and added to the comparison table
        cp.addToCart_should_visible();                        // assert the add to cart button is visible
        cp.remove_should_visible();                           // asser the remove button is visible
    });

    it('Verify Adding Multiple Products to the Comparison', () => {
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product2);
        sh.clickSearch();
        cp.clickCPButton();
        cp.clickComparisonLink();
        // verify that multiple product is visible to the user in the comparison table
        cp.itemName_should_visible(data.product1);
        cp.itemName_should_visible(data.product2);

    });
    it('Verify Removing a Product from the Comparison',()=>{
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product2);
        sh.clickSearch();
        cp.clickCPButton();
        cp.clickComparisonLink();
        cp.compare_page_visible();
        // remove one item from the comparison product table
        cp.clickRemove();
        // verifying that removed product is no more visible to the user
        cp.itemName_should_not_visible(data.product1);
    })
    it(' Verify Comparison List is Empty After Removing All Products', () => {
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product2);
        sh.clickSearch();
        cp.clickCPButton();
        cp.clickComparisonLink();
        cp.compare_page_visible();
        cp.clickRemove();
        cp.clickRemove();
        cy.contains('You have not chosen any products to compare.').should('be.visible');
    });
    it('verify after adding 4 product,when 5th product is added, 1st product is getting removed from the comparison list', () => {
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product2);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product3);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product4);             //  4 different product has been added to the comparison table
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product5);            // add a 5th product to the table 
        sh.clickSearch();
        cp.clickCPButton();
        cp.clickComparisonLink();           // click on the comaparison link 
        // verify that the product which was added for the 1st time is no more visible to the user
        cp.itemName_should_not_visible(data.product1);
    });
    it('verify duplicate product addition to comparison', () => {
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();                     // this will complete the process of adding duplicate items to the comparison table
        cp.clickComparisonLink();
        // verify that the table displaying the item for one time.
        cy.contains(data.product1).should('have.length',1);
    });
    it('Verify Display of Product Attributes on Comparison Page', () => {
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product2);
        sh.clickSearch();
        cp.clickCPButton();
        cp.clickComparisonLink();
        // itrarting thorough the comparison table
        cy.get('.table.table-bordered').within(()=>{

            // asserting that multiple product is displaying inside the table
            cy.contains(data.product1).should('exist');
            cy.contains(data.product2).should('exist');

            // verifying three atrributes to have correct details
            cy.contains('Price').next().should('contain.text','$122.00');
            cy.contains('Model').next().should('contain.text','Product 21');
            cy.contains('Brand').next().should('contain.text','Hewlett-Packard');

            // verifying the same attributes having correct details and showing side by side for the better viewingment of the user
            cy.contains('Price').next().next().should('contain.text','$123.20');
            cy.contains('Model').next().next().should('contain.text','product 11');
            cy.contains('Brand').next().next().should('contain.text','Apple')
        })
    });


    it('Verify Comparison After Page Refresh', () => {
        sh.type(data.product1);
        sh.clickSearch();
        cp.clickCPButton();
        sh.type(data.product2);
        sh.clickSearch();
        cp.clickCPButton();
        cp.clickComparisonLink();

        // refreshing the web page
        cy.reload();

        // verifying the comparison product details remain intact after refresing the web page
        cy.contains(data.product1).should('exist');
        cy.contains(data.product2).should('exist');
        
    });

});

describe(' Testing the product comapare functionlity for the guest user', () => {
    it('adding , removing, and  add to cart from product comapare page without login or register', () => {
        // launch the website on the browser
        hp.visit();
        // add multiple items to the copmare product
        hp.compareButtonAppleCinema();
        hp.compareButtonCanon();


        // assert the success message and the link should visible 
        cp.cp_linkShould_visible();

        //click on the comparison link
        cp.clickComparisonLink();


        // verify that product comparison page is opening for the guest user
        cp.compare_page_visible();

        

        // remove items from the list as a guest user
        cp.clickRemove();
        
        cy.wait(2000);

        // add the product to cart this will take us to the product result page
        cp.ClickAddToCart();

        cy.wait(2000);

        // verify that the description of the product  is visible to the user 
        cy.contains('Description').should('be.visible');


    });
});

