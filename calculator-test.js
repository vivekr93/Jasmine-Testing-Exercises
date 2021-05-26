
it('should calculate the monthly rate correctly', function () {
    expect(monthlyFormula({amount:5000, years: 5, rate: 5})).toEqual('94.36');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount:50000, years: 10, rate: 7}
  expect(monthlyFormula(values)).toEqual('580.54');
});

it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(monthlyFormula(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(monthlyFormula(values)).toEqual('131.00');
});