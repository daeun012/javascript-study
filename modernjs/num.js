/* 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 만들어보세요.

반환되는 값은 꼭 숫자형 값이어야 합니다.

사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환하세요.
 */

function readNumber() {
  let num;

  do {
    num = prompt('Enter a number please?', 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);
