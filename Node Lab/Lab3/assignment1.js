const lodash = require('lodash');

const user = { name: 'Vishal', age: 23, city: 'Pune' };

const newUser = lodash.omit(user, ['age']);

const userNameCity = lodash.pick(user, ['name', 'city']);

console.log('User without age:', newUser);
console.log('User with only name and city:', userNameCity);
