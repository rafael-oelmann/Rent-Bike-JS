const DockingStation = require('../src/dockingStation');
const Bike = require('../src/bike');

describe('dockingStation', () =>{
  test('docking station stores a bike', () => {
    const bike = new Bike();
    const dock = new DockingStation();
    dock.storeBike(bike);
    expect(dock.storage.length).toBe(1);
  });

  test('docking station will not allow < 5 bikes to be stored', () => {
    const bike = new Bike();
    const dock = new DockingStation();
    //refactor this
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    expect(() => dock.storeBike(bike)).toThrow('Docking station is full');
  });

  test('docking station custom cap', () => {
    const bike = new Bike();
    const dock = new DockingStation(2);
    //refactor this
    dock.storeBike(bike);
    dock.storeBike(bike);
    expect(() => dock.storeBike(bike)).toThrow('Docking station is full');
  });

  test('docking station custom cap', () => {
    const bike = new Bike();
    const dock = new DockingStation(7);
    //refactor this
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    dock.storeBike(bike);
    expect(() => dock.storeBike(bike)).toThrow('Docking station is full');
  });
});