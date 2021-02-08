const DockingStation = require("../src/dockingStation");
const Bike = require("../src/bike");
const { doc } = require("prettier");

describe("dockingStation", () => {
  test("docking station stores a bike", () => {
    const bike = new Bike();
    const dock = new DockingStation();
    dock.storeBike(bike);
    expect(dock.workingBikes.length).toBe(1);
  });

  test("working bike will be returned", () => {
    const bike1 = new Bike();
    const bike2 = new Bike();
    const dock = new DockingStation();
    bike1.reportBroken();
    dock.storeBike(bike1);
    dock.storeBike(bike2);
    console.log(dock.workingBikes);
    let readybike = dock.releaseBike();
    expect(readybike.isWorking()).toEqual(true);
  });
  test("docking station will not allow < 5 bikes to be stored", () => {
    const bike = new Bike();
    const dock = new DockingStation();
    for (let step = 0; step < 5; step++) {
      dock.storeBike(bike);
    }
    expect(() => dock.storeBike(bike)).toThrow("Docking station is full");
  });

  test("docking station custom cap", () => {
    const bike = new Bike();
    const dock = new DockingStation(7);
    for (let step = 0; step < 7; step++) {
      dock.storeBike(bike);
    }
    expect(() => dock.storeBike(bike)).toThrow("Docking station is full");
  });

  test("releaseBike error if storage empty", () => {
    const dock = new DockingStation();
    expect(() => dock.releaseBike()).toThrow(
      "There are no working bikes at this docking station"
    );
  });

  test("wont return broken bike", () => {
    const dock = new DockingStation();
    const bike = new Bike();
    bike.reportBroken();
    dock.storeBike(bike);
    expect(() => dock.releaseBike()).toThrow(
      "There are no working bikes at this docking station"
    );
  });
});
