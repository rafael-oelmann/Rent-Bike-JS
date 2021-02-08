const Bike = require("./bike");

class DockingStation {

  constructor(capacity = 5) {
    this.storage = []
    this.capacity = capacity
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