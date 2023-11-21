class UberPriceCalculator {
  constructor(distanceInKm) {
    this.distanceInKm = distanceInKm;
  }
  calculatePrice() {
    const baseFare = 2.5;
    const distanceRate = 1.5;
    const minimumFare = 7.0;
    let fare = baseFare + this.distanceInKm * distanceRate;
    fare = Math.max(fare, minimumFare);
    return fare.toFixed(2);
  }
}
const distance = 10;
const calculator = new UberPriceCalculator(distance);
const price = calculator.calculatePrice();
console.log(`Estimated price for ${distance} km ride: $${price}`);
