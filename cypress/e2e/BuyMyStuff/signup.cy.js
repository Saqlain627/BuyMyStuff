describe('Signin as a buyer', function()
{
  


    it('View the URL of sign up page is correct',function()
    {

     cy.visit ('https://buymystuff-buyer.web.app/signup')
    
    })

    it('name should be minimum 10 characters',function()
    {

     cy.visit ('https://buymystuff-buyer.web.app/signup')
     cy.get(':nth-child(1) > .mb-4 > .input-group > .form-control').type("saqlain44444444444444444444444444444444444444444444444444444")
    })

    
    it('name should be minimum 10 characters',function()
    {

     cy.visit ('https://buymystuff-buyer.web.app/signup')
     cy.get(':nth-child(1) > .mb-4 > .input-group > .form-control').type("saqlain44444444444444444444444444444444444444444444444444444")
    })






})
