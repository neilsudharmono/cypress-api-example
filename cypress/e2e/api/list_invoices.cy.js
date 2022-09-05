
import {
  listInvoiceByStatus,
  listInvoiceAll,
  listInvoiceByExternalId
} from './list_invoice.method.js'

describe('List Invoice Scenarios', function () {


//POSITIVE TEST CASES

    it('List All Invoices', {scrollBehavior: false},function () { 
      
      listInvoiceAll()

    })

//LIST BY EXTERNAL ID

    it('List external id', {scrollBehavior: false},function () { 
      listInvoiceByExternalId("invoice-1662347073")
    })


//LIST BY STATUS

    it('List PENDING Invoices', {scrollBehavior: false},function () { 
        listInvoiceByStatus("PENDING")
    })

    it('List PAID Invoices', {scrollBehavior: false},function () { 
      
      listInvoiceByStatus("PAID")

    })

    it('List EXPIRED Invoices', {scrollBehavior: false},function () { 
      
      listInvoiceByStatus("EXPIRED")

    })

    it('List SETTLED Invoices', {scrollBehavior: false},function () { 
      
      listInvoiceByStatus("SETTLED")

    })
    
})

