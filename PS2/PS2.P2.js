function* wordGen (string= "") {
  let words = string.split(' ');
  let idx = 0;
  while (idx < words.length) {
    yield console.log(words[idx]);
    idx++;
  }
}

let test = wordGen("All I know is something like a bird within her sang");
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();