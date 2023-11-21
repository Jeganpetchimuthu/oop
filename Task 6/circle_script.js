class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }

  drive(miles) {
    if (typeof miles === "number" && !isNaN(miles)) {
      console.log(`${this.make} ${this.model} is driving ${miles} miles.`);
    } else {
      console.error("Invalid input for miles. Please provide a valid number.");
    }
  }
}

// Example usage:
const myCar = new Car("Toyota", "Camry", 2022);
myCar.start();
myCar.drive(50);
myCar.stop();
