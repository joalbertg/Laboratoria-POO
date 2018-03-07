(() => {
  var Teacher = function (name, lastName, country) {
    this.name = name;
    this.lastName = lastName;
    this.country = country;
  };

  var proA = new Teacher('Joalbert', 'González', 'Venezuela');
  console.log(proA);

  var proB = new Teacher('Ruth', 'Salvador', 'Perú');
  console.log(proB);
})();

(() => {
  class Teacher {
    constructor(name, lastName, country) {
      this.name = name;
      this.lastName = lastName;
      this.country = country;
    };
  }

  let proA = new Teacher('Joalbert', 'González', 'Venezuela');
  console.log(proA);

  let proB = new Teacher('Ruth', 'Salvador', 'Perú');
  console.log(proB);
})();

(() => {
  class Person {
    constructor(name, lastName, country) {
      this.name = name;
      this.lastName = lastName;
      this.country = country;
      this.fullName = `${name} ${lastName}`;
    };

    greet() {
      return `Hi, my name is ${this.fullName} and I'm from ${this.country}`;
    };
  }

  let perA = new Person('Joalbert', 'González', 'Venezuela');
  console.log(perA.greet());

  class Teacher extends Person {
    constructor(name, lastName, country, ...courses) {
      super(name, lastName, country);

      this.courses = [...courses];
    };

    inviteToTheCourse() {
      return `Hello, I'm ${this.fullName}, teacher of Laboratoria and I invite you to the ${this.courses.join(', ')} courses. I'll see you in class!`;
    };
  }

  let proA = new Teacher('Joalbert', 'González', 'Venezuela', 'javascript', 'ruby', 'rubyOnRails');

  console.log(proA);
  console.log(proA.inviteToTheCourse());
  console.log(proA.greet());
})();

(() => {
  class Person {
    constructor(name, lastName, country) {
      this.name = name;
      this.lastName = lastName;
      this.country = country;
      this.fullName = `${name} ${lastName}`;
    };

    greet() {
      return `Hi, my name is ${this.fullName} and I'm from ${this.country}`;
    };

    static description(person) {
      return `This person is called ${person.name} and he is from ${person.country}`;
    };
  }

  let perA = new Person('Joalbert', 'González', 'Venezuela');
  console.log(perA.greet());

  console.log(Person.description(perA));
})();
