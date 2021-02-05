const Bike = require('../src/bike')

describe('bike', () => {
  test('working or not' , () => {
    const bike = new Bike();
    expect(bike.isWorking()).toBe(true);
  });
});