let user = {
    name: "Jonh",
    surname: "Smith",
};
user.name = "Pete"
delete user.name;



let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

let isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
}



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); // 390



// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }

}