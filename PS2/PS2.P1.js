function* fib () {
  let curr = 0;
  let prev = 1;
  while (true) {
    let sum = curr+prev;
    yield curr;
    prev = curr;
    curr = sum;
  }
}

function* getEvenFib() {
  const fibGen = fib();
  while(true) {
    let next = fibGen.next();
    if(next.value % 2 === 0) {
      yield next.value;
    }
  }
}

const getEvenFibGen = getEvenFib();

console.log(getEvenFibGen.next())
console.log(getEvenFibGen.next())
console.log(getEvenFibGen.next())
console.log(getEvenFibGen.next())
console.log(getEvenFibGen.next())
console.log(getEvenFibGen.next())