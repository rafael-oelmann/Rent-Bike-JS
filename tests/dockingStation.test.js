const DockingStation = require('../src/dockingStation');


describe('dockingStation', () =>{
  test('docking station releases a bike', () => {
    const dock = new DockingStation();
    expect(dock.releaseBike()).toBe('Bike is released')
  });
});