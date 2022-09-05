
let createInvoiceWithMandatoryParam= (external_id,amount)=>{
    cy.request({
        method: 'POST',
        url: "/v2/invoices/",
        failOnStatusCode: false,
        headers:{
          Authorization: "Basic " + Cypress.env("auth")
        },
        body: {
          "external_id": external_id,
          "amount": amount
        }

    })
    .then((resp) => {
      
      expect(resp.status).to.eq(200)
      expect(resp.body.external_id).to.eq(external_id),
      expect(resp.body.amount).to.eq(amount)
/*
      cy.request({
        method: 'GET',
        url: "/v2/invoices/"+resp.body.id,
        headers:{
          Authorization: "Basic " + Cypress.env("auth")
        }

    })
    .then((resp) => {
      
      expect(resp.status).to.eq(200)
    })
*/


    })

}


let createInvoiceWithOptionalParamteres= (external_id,amount)=>{
  cy.request({
      method: 'POST',
      url: "/v2/invoices/",
      failOnStatusCode: false,
      headers:{
        Authorization: "Basic " + Cypress.env("auth")
      },
      body: {
        "external_id": external_id,
        "amount": amount,
        "customer": {
          "given_names": "NEIL",
          "surname": "TEST",
          "email": "neiltest@example.com",
          "mobile_number": "+6287774441111",
          "addresses": [
              {
                  "city": "Jakarta Selatan",
                  "country": "Indonesia",
                  "postal_code": "12345",
                  "state": "Daerah Khusus Ibukota Jakarta",
                  "street_line1": "Jalan Makan",
                  "street_line2": "Kecamatan Kebayoran Baru"
              }
          ]
      },
      "customer_notification_preference": {
          "invoice_created": [
              "whatsapp",
              "sms",
              "email",
              "viber"
          ],
          "invoice_reminder": [
              "whatsapp",
              "sms",
              "email",
              "viber"
          ],
          "invoice_paid": [
              "whatsapp",
              "sms",
              "email",
              "viber"
          ],
          "invoice_expired": [
              "whatsapp",
              "sms",
              "email",
              "viber"
          ]
      },
      "success_redirect_url": "https://www.google.com",
      "failure_redirect_url": "https://www.google.com",
      "currency": "IDR",
      "items": [
          {
              "name": "Air Conditioner",
              "quantity": 1,
              "price": amount,
              "category": "Electronic",
              "url": "https://yourcompany.com/example_item"
          }
      ],
      "fees": [
          {
              "type": "ADMIN",
              "value": 5000
          }
      ]
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(200)
    expect(resp.body.external_id).to.eq(external_id),
    expect(resp.body.amount).to.eq(amount)
    expect(resp.body.customer.given_names).to.eq("NEIL")
/*
    cy.request({
      method: 'GET',
      url: "/v2/invoices/"+resp.body.id,
      headers:{
        Authorization: "Basic " + Cypress.env("auth")
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(200)
  })
*/


  })

}

let createInvoiceWithBlankMandatory= (external_id,amount)=>{
  cy.request({
      method: 'POST',
      url: "/v2/invoices/",
      failOnStatusCode: false,
      headers:{
        Authorization: "Basic " + Cypress.env("auth")
      },
      body: {
        "external_id": external_id,
        "amount": amount
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(400)
    expect(resp.body.error_code).to.equal("API_VALIDATION_ERROR")



  })

}


let createInvoiceWithUnavailablePaymetMethod= (external_id,amount)=>{
  cy.request({
      method: 'POST',
      url: "/v2/invoices/",
      failOnStatusCode: false,
      headers:{
        Authorization: "Basic " + Cypress.env("auth")
      },
      body: {
        "external_id": external_id,
        "amount": amount,
        "callback_virtual_account_id": "6315802ef635423c6649cc64"
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(400)
    expect(resp.body.error_code).to.equal("UNAVAILABLE_PAYMENT_METHOD_ERROR")



  })

}


let createInvoiceWithNotValidatedAmount= (external_id,amount)=>{
  cy.request({
      method: 'POST',
      url: "/v2/invoices/",
      failOnStatusCode: false,
      headers:{
        Authorization: "Basic " + Cypress.env("auth")
      },
      body: {
        "external_id": external_id,
        "amount": amount
      }

  })
  .then((resp) => {
    
    expect(resp.status).to.eq(400)
    if(amount<10000)
    {
      expect(resp.body.error_code).to.equal("MINIMAL_TRANSFER_AMOUNT_ERROR")
    }
    if(amount>1000000000)
    {
      expect(resp.body.error_code).to.equal("MAXIMUM_TRANSFER_AMOUNT_ERROR")
    }
    



  })

}


   

export {
  createInvoiceWithMandatoryParam,
  createInvoiceWithOptionalParamteres,
  createInvoiceWithBlankMandatory,
  createInvoiceWithUnavailablePaymetMethod,
  createInvoiceWithNotValidatedAmount
  
}
