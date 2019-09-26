const cube = (num) => Math.pow(num,3);

const cubeMapper = (arr = []) => arr.map(el => cube(el));

let arr = [1,2,3,4,5,6,7];
console.log(cubeMapper(arr));