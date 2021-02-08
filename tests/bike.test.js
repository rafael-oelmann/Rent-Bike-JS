const Bike = require('../src/bike')

describe('bike', () => {
  test('working or not' , () => {
    const bike = new Bike();
    expect(bike.isWorking()).toBe(true);
  });

  test('report broken', () => {
    const bike = new Bike();
    bike.reportBroken();
    expect(bike.isWorking()).toBe(false);
  });
});