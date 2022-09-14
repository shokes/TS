"use strict";
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// let user1: Person;
// user1 = {
//   name: 'Max',
//   age: 20,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };
// user1.greet('whats up');
/*
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'oshoke',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log('name' + emp.name);
  if ('privileges' in emp) {
    console.log('privilages: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('privilages: ' + emp.startDate);
  }
};

printEmployeeInformation(el);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    //console.log('Moving with speed: ' + animal.flyingSpeed)
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('moving at speed: ' + speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 100 });

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'not a valid email',
  username: 'must stast with a cpiatl ch',
};

const fetchedUserData = {
  id: 'ul',
  name: 'oshooke',
  job: {
    title: 'CEO',
    desc: 'my own company',
  },
};

console.log(fetchedUserData.job.title);
*/
// GENERIC TYPES
//const names = ['oshoke', 'oyati'];
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// console.log(merge({ name: 'shokes' }, { name: 'muski' }));
