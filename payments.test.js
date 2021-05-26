describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 150;
      tipAmtInput.value = 30;
    });
    
it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('150');
    expect(allPayments['payment1'].tipAmt).toEqual('30');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
});

it('should update paymentTable using appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);

    let curPayTable = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curPayTable.length).toEqual(3);
    expect(curPayTable[0].innerText).toEqual('$150');
    expect(curPayTable[1].innerText).toEqual('$30');
    expect(curPayTable[2].innerText).toEqual('20%');
});

it('should create a new payment on createCurPayment()', function () {
    let expectedPayment = {
        billAmt: '150',
        tipAmt: '30',
        tipPercent: 20,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
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