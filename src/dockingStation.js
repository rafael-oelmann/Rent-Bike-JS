const Bike = require("./bike");

class DockingStation {

  constructor() {
    this.storage = []
    this.capacity = 5
  }

  releaseBike() { 
    return new Bike;
  };

  storeBike(bike) {
    if (this.storage.length >= this.capacity) {
      throw 'Docking station is full'
    }
    else {
      this.storage.push(bike);
    }
  }

};

module.exports = DockingStation;