const filterEvenNumbers = numbers => numbers.filter(isEven);
const capitalizeString = str => str.toUpperCase();
banana

const greet = name => `Hello, ${name}!`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
83,92,89,55,34,79 - false
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const isEven = num => num % 2 === 0;
const reverseWords = str => str.split(" ").reverse().join(" ");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
orange * kiwi
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false + 54
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
grape / grape
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
function addNumbers(a, b) { return a + b; }

const squareRoot = num => Math.sqrt(num);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
