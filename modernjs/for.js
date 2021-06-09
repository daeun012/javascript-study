for(let i=2; i<=10; i++){
    if(i%2!=0)continue;
    alert(i);
}

let a = 0; 
while(a < 3){
    alert(`number ${a}!`);
    a++;
}

do{
    let value = prompt("100보다 큰 숫자를 입력하세요");
}while(value<=100 && value);   



let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert( i ); // 소수
}