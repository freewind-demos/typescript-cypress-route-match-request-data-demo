describe('cypress', () => {

  it('match request data', () => {

    cy.server();

    // FIXME
    // how to get request and check it's 'headers' to respond different stub responses?

    // cy.route('GET', '/public/data.json', (routeData: Cypress.RouteOptions, x:any) => {
    //   console.log('### routeData', routeData, x);
    //   return {
    //     data: {"message":"aaa"}
    //   }
    // })
    
    // cy.route({
    //   method: 'GET',
    //   url: '/public/data.json',
    //   onRequest: (...args): void => {
    //     console.log('### onRequest', args)
    //   },
    //   onResponse: (...args): void => {
    //     console.log('### onResponse', args)
    //   }
    // })
    cy.visit('/public/index.html');

    cy.get('#button1').click();
    cy.get('#message').should('have.text', 'xxx')

  })

})
