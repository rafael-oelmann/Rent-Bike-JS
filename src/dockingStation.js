const Bike = require("./bike");

class DockingStation {

  releaseBike() { 
    return new Bike;
  };

};

module.exports = DockingStation;