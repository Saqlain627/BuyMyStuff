describe('Signin as a buyer', function()
{
  


    it('Emails is not correct',function()
    {

     cy.visit ('https://buymystuff-buyer.web.app/signin')
     cy.get('.input-group > .form-control'). type("saqlain@gmail.com")
     cy.get('.icon-field > .form-control').type("Saqlain@1")
     cy.get('form.ng-dirty > .justify-content-center'). click()
     cy.log('Email is not correct');

    })

    
    it('Password is not correct',function()
    {

     cy.visit ('https://buymystuff-buyer.web.app/signin')
     cy.get('.input-group > .form-control'). type("saqlain@gmail.com")
     cy.get('.icon-field > .form-control').type("saqlain@1")
     cy.get('form.ng-dirty > .justify-content-center'). click()
     cy.log('Password is not correct');
    })


    it('Website link is correct or not and user should navigate to correct website',function()
    {

     cy.visit ('https://buymystuff-buyer.web.app/signin')
     cy.get('.input-group > .form-control'). type("saqlaina627@gmail.com")
     cy.get('.icon-field > .form-control').type("Saqlain@1")
     cy.get('form.ng-dirty > .justify-content-center'). click()
     cy.log('User login');
    })


})