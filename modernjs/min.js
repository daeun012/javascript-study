function min(a,b){
    return a>b ? b : a;
}


function pow(x,n){
  let result = x**n; 
  return result;
}

let x = prompt("x를 입력하세요");
let n = prompt("n를 입력하세요");

if(n<1){
    alert(`${n}은 양의 정수이어야 합니다.`)
}else{
    alert(pow(x,n))
}