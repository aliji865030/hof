function sum(array) {
    return array.reduce((acc, val) => acc + val, 0);
}

function clearRepeats(array) {
    return [...new Set(array)];
}

function max(array) {
    return Math.max(...array);
}

function min(array) {
    return Math.min(...array);
}

function average(array) {
    return sum(array) / array.length;
}

function median(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
}

function unique(array) {
    return [...new Set(array)];
}

function product(array) {
    return array.reduce((acc, val) => acc * val, 1);
}

function sortAsc(array) {
    return array.slice().sort((a, b) => a - b);
}

function sortDesc(array) {
    return array.slice().sort((a, b) => b - a);
}

module.exports = {
    sum,
    clearRepeats,
    max,
    min,
    average,
    median,
    unique,
    product,
    sortAsc,
    sortDesc
};
