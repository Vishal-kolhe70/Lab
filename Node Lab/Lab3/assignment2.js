const lodash = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = lodash.chunk(array, 3);

const nestedArray = [[1, 2], [3, 4,], [5, 6]];
const flattenedArray = lodash.flatten(nestedArray);

console.log('Chunked Array:', chunkedArray);
console.log('Flattened Array:', flattenedArray);
