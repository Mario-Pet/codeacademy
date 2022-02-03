class Dog {
    constructor(name) {
      this.name = name;
      this.behavior = 0;
    } 
  }

  class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
   
  const halley = new Dog('Halley'); // Create new Dog instance
  console.log(halley.name); // Log the name value saved to halley

  const surgeonRomero = new Surgeon('Francisco Romero', "Cardiovascular")
  console.log(surgeonRomero)

  const surgeonJackson = new Surgeon('Ruth Jackson', "Orthopedics")
  console.log(surgeonJackson)