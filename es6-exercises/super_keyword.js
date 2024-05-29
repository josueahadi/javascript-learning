class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return `I have a ${this.carname}`;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    present() {
      return (`${super.present()}, it is a ${this.model}`);
    }
  }
  
  myCar = new Model("Ford", "Mustang");
  
  console.log(myCar.present());