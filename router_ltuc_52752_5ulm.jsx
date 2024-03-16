const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana

const formatDate = date => new Date(date).toLocaleDateString();
function addNumbers(a, b) { return a + b; }
const getRandomSubset = (array, size) => array.slice(0, size);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
