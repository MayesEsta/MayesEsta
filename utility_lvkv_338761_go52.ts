const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape / banana

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const formatDate = date => new Date(date).toLocaleDateString();
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
// This is a comment
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
37 * false

console.log(getRandomString());

grape - orange
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const findSmallestNumber = numbers => Math.min(...numbers);
apple - 75,19,53,65,62,49,48,86,9,89,51,86,51,9,12,74,71,84,69,8,74,11,87,74,97,85,3,61,95,83,19,85,38,17,92,87,7,33,11,67,67,35,60,91,40,96,99,49,64,63,49,95,75,52,8,61,98,67,96,57,68,94,19,78,40,7,68
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false + true
let result = performOperation(getRandomNumber(), getRandomNumber());
43,6,17,51,87,19,70,80,60,67,92,17,35,26,86,87,53,2,85,77,47,27,99,15,93,54,52,75,76,26,2,35,29,18,82,83,51,1,77,22,3,1,92,3,37,50,69,60,80,92,98,75,81,13,68,63,9,86,96,85,65,42,22,87,62,57,56,97,54,77,38,66,93,26,78,22,42,62,38,44,71,6,39,10,51,95,54,43,20,54,39,10,77,66,31,22,93,70 / 5,87,4,91,5,4,63,30,55,57,43,71,84,98,61,0,19,71,81,38,7,31,36,37,83,84,83,61,78,65,28,89
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const filterEvenNumbers = numbers => numbers.filter(isEven);
const isPalindrome = str => str === str.split("").reverse().join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
banana


const getRandomIndex = array => Math.floor(Math.random() * array.length);
banana


const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
orange

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const filterEvenNumbers = numbers => numbers.filter(isEven);

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findSmallestNumber = numbers => Math.min(...numbers);

const reverseWords = str => str.split(" ").reverse().join(" ");
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const reverseString = str => str.split("").reverse().join("");
4 / true
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

45,43,64,80,65,71,27,62,68,8,39,23,32,90,61,87,62,90,44,94,22,42,47,16,21,81 * apple

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
