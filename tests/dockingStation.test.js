const DockingStation = require('../src/dockingStation');
const Bike = require('../src/bike');

describe('dockingStation', () =>{
  test('docking station releases a bike', () => {
    const bike = new Bike();
    const dock = new DockingStation();
    dock.storeBike(bike);
    expect(dock.storage.length).toBe(1);
  });
});