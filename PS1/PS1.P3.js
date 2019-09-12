const ps3 = (string = '', func) => {
  let result = func(string);
  return result;
}

console.log(
  ps3('supercalifragilisticexpialidocious', 
  (input) => {
    let result = [];
    let index = 0;
    for (let i = 0; i < input.length; i++) {
      const element = input.charAt(i);
      if(element === 'c') {
        result.push(input.substring(index, i));
        index = i;
      }
    }
    return result;
  })
);

console.log(
  ps3('supercalifragilisticexpialidocious', 
  (input) => {
    let result = {};
    let originalString = input;
    let numberReplaced = 0;
    let length = input.length;
    let charArr = input.split('');
    charArr.forEach(element => {
      if(element === 'a') {
        element = element.toUpperCase;
        numberReplaced = numberReplaced + 1;
      }
    });
    let modifiedString = charArr.join('');
    return { originalString, modifiedString, numberReplaced, length };
  })
);
