describe("Helper tests with setup and take down)", function() {
    beforeEach(function () {
        billAmtInput.value = 150;
        tipAmtInput.value = 30;
        submitPaymentInfo();
    });
    
it('should sum total tip amount, bill amount and tip percent of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(30);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(50);
});

it('should sum tip percent of a single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(150, 30)).toEqual(20);
});


it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'Vivek');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('Vivek');
});  

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});