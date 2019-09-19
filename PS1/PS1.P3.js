const ps3 = (string = '', func) => {
  let result = func(string);
  return result;
}

console.log(
  ps3('supercalifragilisticexpialidocious', 
  (input) => {
    return input.replace(/c/g, "&c").split('&');
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
    charArr.forEach((element, i) => {
      if(element === 'a') {
        charArr[i] = element.toUpperCase();
        numberReplaced = numberReplaced + 1;
      }
    });
    let modifiedString = charArr.join('');
    return { originalString, modifiedString, numberReplaced, length };
  })
);
