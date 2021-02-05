const Bike = require("./bike");

class DockingStation {

  constructor() {
    this.storage = []
  }

  releaseBike() { 
    return new Bike;
  };

  storeBike(bike) {
    this.storage.push(bike);
  }

};

module.exports = DockingStation;