
let getInvoiceId= (id)=>{
    cy.request({
        method: 'GET',
        url: "/v2/invoices/"+id,
        headers:{
          Authorization: "Basic " + Cypress.env("auth")
        }

    })
    .then((resp) => {
      
      expect(resp.status).to.eq(200)
      expect(resp.body.id).to.eq(id)
    })

}

let getInvoiceIdNoFound= (id)=>{
  cy.request({
      method: 'GET',
      url: "/v2/invoices/"+id,
      failOnStatusCode: false,
      headers:{
        Authorization: "Basic " + Cypress.env("auth")
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(404)
  })

}

let getInvoiceIdForbidden= (id)=>{
  cy.request({
      method: 'GET',
      url: "/v2/invoices/"+id,
      failOnStatusCode: false,
      headers:{
        Authorization: "Basic " + " "
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(401)
  })

}
   

export {
  getInvoiceId,
  getInvoiceIdNoFound,
  getInvoiceIdForbidden
}
