
import {
  getInvoiceId,
  getInvoiceIdNoFound,
  getInvoiceIdForbidden
} from './get_invoice.method.js'

describe('List Invoice Scenarios', function () {


//POSITIVE TEST CASES

    it('Get Invoice by ID', {scrollBehavior: false},function () { 
      
      getInvoiceId("63157fcbd81acf2a2d595478")

    })

    it('Not Found an Invoice', {scrollBehavior: false},function () { 
      
      getInvoiceIdNoFound("notfound")

    })

    it('Unauthorized Accessed', {scrollBehavior: false},function () { 
      
      getInvoiceIdForbidden("notauthorized")

    })

    

    
})

