const ps1 = (string = "") => {
  return string.split('').sort().join('');
}

console.log(ps1("supercalifragilisticexpialidocious"));