const lodash = require('lodash');

const users = [
  { name: 'Vishal', age: 30 },
  { name: 'Ankit', age: 25 },
  { name: 'Nitin', age: 35 },
  { name: 'Ram', age: 20 }
];

const usersOlderThan25 = lodash.filter(users, user => user.age > 25);

const usersSortedByAge = lodash.sortBy(users, ['age']);

console.log('Users older than 25:', usersOlderThan25);
console.log('Users sorted by age:', usersSortedByAge);
