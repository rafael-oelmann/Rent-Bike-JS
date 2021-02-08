class Bike {

  constructor() {
    this.working = true
  }

  isWorking() {
    return this.working
  }

  reportBroken() {
    this.working = false
  }
}

module.exports = Bike;