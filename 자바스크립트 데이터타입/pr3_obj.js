//Object()를 이용해 객체 생성
let objA = new Object();

objA.name = "ung";
objA.age = 25;

console.log(objA);
console.log(objA.name);

//객체 리터럴 방식으로 객체 생성
let objB = {
    name: "ung",
    age: 25
};

console.log(objB);
console.log(objB.age);

//생성자를 이용한 객체는 챕터4에서 다룸

//프로퍼티 접근
console.log(objA.name);
console.log(objB["name"]);

//for in문을 이용한 프로퍼티 출력

let fruit = {
    사과: 1,
    배: 2,
    딸기: 3,
    오렌지: 4,
    바나나: 5
}

for (prop in fruit) {
    console.log(prop, fruit[prop]);
}

//프로퍼티 삭제
console.log(fruit);
delete fruit.사과;
console.log(fruit);

//객체 비교

console.log(objA);
console.log(objB);
console.log(objA == objB);

let objC = objA;
console.log(objA == objC);

//call by value VS call by reference

let num = 100;
let obj = {
    num: 100
};

console.log(num);
console.log(obj);

function changeNum(num, obj) {
    num = 200;
    obj.num = 200;
}

changeNum(num, obj);

console.log(num);
console.log(obj);
