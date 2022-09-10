"use strict";
const person = {
    name: 'oshoke',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author'],
};
person.role.push('admin');
//person.role[1] = 10;
let favoriteActivites;
favoriteActivites: ['sports'];
console.log(person);
person.hobbies.map((hobby) => {
    console.log(hobby);
});
