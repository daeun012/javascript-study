let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

alert(a == b); // true



function Calculator() {
    this.read = function () {
        this.a = +prompt('첫 번째 값:', 0);
        this.b = +prompt('두 번째 값:', 0);
    }
    this.sum = function () {
        return this.x + this.y
    }
    this.mul = function () {
        return this.x * this.y
    }
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());



function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("숫자를 입력하세요")
    }
}


let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
