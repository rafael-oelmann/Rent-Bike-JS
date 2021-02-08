const Bike = require("./bike");

class DockingStation {
  constructor(capacity = 5) {
    this.brokenBikes = [];
    this.workingBikes = [];
    this.capacity = capacity;
  }

  releaseBike() {
    if (this.workingBikes.length == 0) {
      throw "There are no working bikes at this docking station";
    } else {
      let readyBike = this.workingBikes[0];
      this.workingBikes.shift();
      return readyBike;
    }
  }

  storeBike(bike) {
    if (this.brokenBikes.length + this.workingBikes.length >= this.capacity) {
      throw "Docking station is full";
    } else if (bike.isWorking() == false) {
      this.brokenBikes.push(bike);
    } else {
      this.workingBikes.push(bike);
    }
  }
}

module.exports = DockingStation;
