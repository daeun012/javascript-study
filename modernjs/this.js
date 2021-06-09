let calculator = {
    read() {
        this.a = +prompt('첫 번째 값:', 0);
        this.b = +prompt('두 번째 값:', 0);
    },
    sum() {
        return this.x + this.y
    },
    mul() {
        return this.x * this.y
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());



let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        alert(this.step);
    }
};
