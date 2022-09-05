
const expireInvoice=(status)=> {  // cannot return the raw string 
  let gid
    cy.request({
    method: 'GET',
    url: "/v2/invoices?statuses=[\""+status+"\"]",
    failOnStatusCode: false,
    headers:{
      Authorization: "Basic " + Cypress.env("auth")
    }

})
.then((response)=>{
       
    expect(response).property('status').to.equal(200)
    expect(response.body[0]).property('id').to.not.be.oneOf([null, ""])
    const respBody = response.body[0];
    gid = respBody['id']
    cy.log(gid)
    if(status==="PENDING") expireInvoiceMethod(gid)
    else expireInvoiceMethodFailed(gid)


})

}


let expireInvoiceMethod= (id)=>{
  
cy.request({
  method: 'POST',
  url: "/invoices/"+id+"/expire!  ",
  headers:{
    Authorization: "Basic " + Cypress.env("auth")
  }

})
.then((resp1) => {

expect(resp1.status).to.eq(200)
expect(resp1.body.status).to.eq("EXPIRED")
})




}


let expireInvoiceMethodFailed= (id)=>{
  
  cy.request({
    method: 'POST',
    url: "/invoices/"+id+"/expire!  ",
    failOnStatusCode: false,
    headers:{
      Authorization: "Basic " + Cypress.env("auth")
    },
  
  
  })
  .then((resp1) => {
  
  expect(resp1.status).to.eq(404)
  expect(resp1.body.error_code).to.eq("INVOICE_NOT_FOUND_ERROR")
  })
  
  
  }
export {
  expireInvoice
}
