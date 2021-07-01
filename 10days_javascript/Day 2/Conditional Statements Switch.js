function getLetter(s) {
  let letter;
  // Write your code heres
  switch (s[0]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      letter = 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      letter = 'B';
      break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      letter = 'C';
      break;
    default:
      letter = 'D';
      break;
  }
  return letter;
}

// 더 쉬운 코드
function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
    case 'bcdfg'.includes(s[0]):
      letter = 'B';
      break;
    case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
    case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D';
      break;
  }
  return letter;
}
