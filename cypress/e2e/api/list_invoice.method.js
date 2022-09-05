
let listInvoiceAll= ()=>{
    cy.request({
        method: 'GET',
        url: "/v2/invoices",
        headers:{
          Authorization: "Basic " + Cypress.env("auth")
        }

    })
    .then((resp) => {
      console.log(resp.body)
      expect(resp.status).to.eq(200)
      expect(resp.body).to.be.a('array')
    })

}


let listInvoiceByStatus= (status)=> {
    cy.request({
        method: 'GET',
        url: "/v2/invoices?statuses=[\""+status+"\"]",
        headers:{
          Authorization: "Basic " + Cypress.env("auth")
        }

    })
    .then((resp) => {
      
      expect(resp.status).to.eq(200)
      expect(resp.body).to.be.an('array')

      if(resp.body.length>0)
      {

      for(var i=0;i<resp.body.length;i++)
      {
        expect(resp.body[i].status).to.eq(status)
      }
    }
      

    })
}


let listInvoiceByExternalId= (externalId)=> {
    cy.request({
        method: 'GET',
        url: "/v2/invoices?external_id="+ externalId,
        headers:{
          Authorization: "Basic " + Cypress.env("auth")
        },
        qs: {
          
        }

    })
    .then((resp) => {
      
      expect(resp.status).to.eq(200)
      expect(resp.body).to.be.an('array')

      if(resp.body.length>0)
      {

      for(var i=0;i<resp.body.length;i++)
      {
        expect(resp.body[i].external_id).to.eq(externalId)
      }
    }
      

    })
}


   

export {
    listInvoiceByStatus,
    listInvoiceAll,
    listInvoiceByExternalId
}
