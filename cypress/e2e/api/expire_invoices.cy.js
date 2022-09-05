import{
  expireInvoice
} from './expire_invoices.method '



describe('List Invoice Scenarios', function () {


//POSITIVE TEST CASES

    it('Expire PENDING Invoice', {scrollBehavior: false},function () { 
      expireInvoice("PENDING")
    })

//NEGATIVE TEST CASES
    
it('Expire PAID Invoice', {scrollBehavior: false},function () { 
    expireInvoice("PAID")
})

it('Expire EXPIRED Invoice', {scrollBehavior: false},function () { 
  expireInvoice("EXPIRED")
})

    
})

