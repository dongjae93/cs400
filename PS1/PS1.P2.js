const evaluate = (input = '') => {
  let left = parseInt(input.charAt(0));
  let right = parseInt(input.charAt(2));
  let operator = input.charAt(1);
  
  return (expression = '') => {
    switch (operator) {
      case '+':
        return left + right;
      case '*':
        return left * right;
      case '-':
        return left - right;
      case '%':
        return left % right;
      case '/':
        return left / right;
      default:
        return null;
    }
  } 
}


const expression1 = '8%3';
const expression2 = '8+3';
const expression3 = '8-3';
const expression4 = '8*3';
const expression5 = '8/3';

let operator = evaluate(expression1);
console.log(`${expression1} = ${operator(expression1)}`) 
operator = evaluate(expression2);
console.log(`${expression2} = ${operator(expression2)}`) 
operator = evaluate(expression3);
console.log(`${expression3} = ${operator(expression3)}`) 
operator = evaluate(expression4);
console.log(`${expression4} = ${operator(expression4)}`) 
operator = evaluate(expression5);
console.log(`${expression5} = ${operator(expression5)}`) 