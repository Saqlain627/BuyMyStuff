describe('Forget password', function()
{


it('URL of visit password is correct or not',function()
{
cy.visit ('https://buymystuff-buyer.web.app/forgot-password')
})

it('Link of forget password should not send to user email',function()
{
 cy.visit ('https://buymystuff-buyer.web.app/forgot-password')
 cy.get('input[placeholder="Enter Email"]').type("saqlaina89@gmail.com")
 cy.get('form.ng-dirty > .btn').click()
})


it('Link of forget password should send to user email',function()
{

 cy.visit ('https://buymystuff-buyer.web.app/forgot-password')
 cy.get('input[placeholder="Enter Email"]').type("saqlaina627@gmail.com")
 cy.get('form.ng-dirty > .btn').click()
})

})

