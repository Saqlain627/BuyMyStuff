import 'cypress-file-upload';
describe('Signin as a buyer', {retries: 1}, function()
{
       it('View the URL of sign up page is correct',function()
    {
        cy.visit ('https://buymystuff-buyer.web.app/signup')
        cy.get('input[placeholder="Name Here*"]').type("saqlain");
        cy.wait(5000);
    })


    // it('select the gender', function () {
    //     cy.get('.inlineRadio1').check().should("Male");
    //   })
      


    describe("Enter the user phone number", function()
        {
            it('Enter the user name', function()
            {
            cy.visit ('https://buymystuff-buyer.web.app/signup');
            cy.get('input[placeholder="Enter Here*"]').type("03060695405");
            cy.wait(5000);
        })


    })

    describe("Enter the user email", function()
    {
        it('Enter the correct email' , function()
        {
        cy.visit ('https://buymystuff-buyer.web.app/signup');
        cy.get('input[placeholder="Email Here*"]').type("saqlaina627@gmail.com");
        cy.wait(5000);
        })

  

  
})

describe("Enter the password", function()
{
    it('Enter the correct email', function()
    {
    cy.visit ('https://buymystuff-buyer.web.app/signup');
    cy.get('input[placeholder="Enter Password*"]').type("Saqlain@1");
    cy.wait(5000);
})

it('Upload image', function() {
       
    cy.visit('https://buymystuff-buyer.web.app/signup');
    cy.fixture('laptop.jpg').as('imageData');
    cy.get('.uploadInner').attachFile('laptop.jpg');
    cy.wait(5000);

})




})






})






   






    // it('name should be minimum 10 characters',function()
    // {

    //  cy.visit ('https://buymystuff-buyer.web.app/signup')
    //  cy.get('[@placeholder='Name Here*']').type("saqlain44444444444444444444444444444444444444444444444444444")
    // })
