
import {
  createInvoiceWithMandatoryParam,
  createInvoiceWithOptionalParamteres,
  createInvoiceWithBlankMandatory,
  createInvoiceWithUnavailablePaymetMethod,
  createInvoiceWithNotValidatedAmount
} from './create_invoice.method.js'

describe('List Invoice Scenarios', function () {


//POSITIVE TEST CASES

    it('Create Invoice with mandatory parameters', {scrollBehavior: false},function () { 
      
      createInvoiceWithMandatoryParam("invoice-"+ Date.now(),1000000) 

    })

    it('Create Invoice with optional parameters', {scrollBehavior: false},function () { 
      
      createInvoiceWithOptionalParamteres("invoice-"+ Date.now(),1000000)

    })


    

//NEGATIVE TEST CASES

    it('Create Invoice with blank external id', {scrollBehavior: false},function () { 
          
      createInvoiceWithBlankMandatory(null,1000000)

    })

    it('Create Invoice with blank amount', {scrollBehavior: false},function () { 
          
      createInvoiceWithBlankMandatory("invoice-"+ Date.now(),null)

    })

    it('Create Invoice with Unavailable Payment Method', {scrollBehavior: false},function () { 
          
      createInvoiceWithUnavailablePaymetMethod("invoice-"+ Date.now(),1000000)

    })

    it('Create Invoice with Less than Minimum Amount', {scrollBehavior: false},function () { 
          
      createInvoiceWithNotValidatedAmount("invoice-"+ Date.now(),1)

    })

    it('Create Invoice with More Than Maximum Amount', {scrollBehavior: false},function () { 
          
      createInvoiceWithNotValidatedAmount("invoice-"+ Date.now(),10000000011)

    })
    
    
    
})

