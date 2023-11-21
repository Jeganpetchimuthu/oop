class Person {
  constructor(firstName, lastName, age, from) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.from = from;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old im from ${this.from}`
    );
  }
}

const person1 = new Person("jegan", "arun", 30, "madurai");
person1.greet();
