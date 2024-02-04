import 'cypress-file-upload';
describe('Signin as a buyer', {retries: 1}, function()
{
       it('Signup buyer with already existing email account',function()
    {
        cy.visit ('https://buymystuff-buyer.web.app/signup')
        //user name should be enter
        cy.get('input[placeholder="Name Here*"]').type("saqlain");
        cy.wait(5000);


         //User add the image file
        cy.fixture('laptop.jpg').as('imageData');
        cy.get('.uploadInner').attachFile('laptop.jpg');
        

        //Select the gender in sign-up form

        cy.get('#inlineRadio1').check('Male');

        // User phone number be added in this case
        cy.get('input[placeholder="Enter Here*"]').type("03060695405");
       

        // user phone number should be entered in this field.
        cy.get('input[placeholder="Email Here*"]').type("saqlaina627@gmail.com");
        
        
        //User enter the password
        cy.get('input[placeholder="Enter Password*"]').type("Saqlain@1");
        

        //user re-enter the password
        cy.get('input[placeholder="Re-Enter Password*"]').type("Saqlain@1");
       

        cy.get('#flexCheckDefault').check();

      

        //User click the button
        cy.contains('button', 'Register Account').click();
        cy.wait(2000);

        
    })
}) 



describe('Signin as a buyer with negative test cases', {retries: 1}, function()
{
   it('Signup buyer flow check in negative test cases',function()
    {
        cy.visit ('https://buymystuff-buyer.web.app/signup')
        //user name should be enter
        cy.get('input[placeholder="Name Here*"]').type("saqlain098909595959599595959595959595959595959595959");
        cy.wait(5000);

        //Select the gender in sign-up form

        cy.get('#inlineRadio1').check();

        // User phone number be added in this case
        cy.get('input[placeholder="Enter Here*"]').type("uuu03060999999999999990695405");
       

        // user Email should be entered in this field.
        cy.get('input[placeholder="Email Here*"]').type("saqlaina627gmail.com");
        
        
        //User enter the password
        cy.get('input[placeholder="Enter Password*"]').type("Saqlain1");
        
        //user re-enter the password
        cy.get('input[placeholder="Re-Enter Password*"]').type("Saqlain@2");
        

       // User add the image file
        cy.fixture('laptop.jpg').as('imageData');
        cy.get('.uploadInner').attachFile('laptop.jpg');
        


        //User uncheck the box
    
        cy.get('#flexCheckDefault').uncheck();

      

        //User click the button
        cy.contains('button', 'Register Account').click();
        
        cy.wait(2000);




    })

})



describe('Sign up as a buyer sucessfully with all the positive test cases', {retries: 1}, function()
{
       it('Sign up as a buyer sucessfully with all the positive test cases',function()
    {
        cy.visit ('https://buymystuff-buyer.web.app/signup')
        //user name should be enter
        cy.get('input[placeholder="Name Here*"]').type("saqlain");
        cy.wait(5000);

        //Select the gender in sign-up form

        cy.get('#inlineRadio1').check('Male');

        // User phone number be added in this case
        cy.get('input[placeholder="Enter Here*"]').type("03060695405");
       

        // user phone number should be entered in this field.
        cy.get('input[placeholder="Email Here*"]').type("saqlaina627+302@gmail.com");
        
        
        //User enter the password
        cy.get('input[placeholder="Enter Password*"]').type("Saqlain@1");
        

        //user re-enter the password
        cy.get('input[placeholder="Re-Enter Password*"]').type("Saqlain@1");
        

        //User add the image file
        cy.fixture('laptop.jpg').as('imageData');
        cy.get('.uploadInner').attachFile('laptop.jpg');

        cy.get('#flexCheckDefault').check();

        //User click the button
        cy.contains('button', 'Register Account').click();
        cy.wait(2000);

        
    })
})  












   




