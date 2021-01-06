//+연산자는 둘 다 숫자일 시 더하기 연산, 아닐 시 문자열 연결 연산을 수행

let n1 = 1;
let n2 = 2;
let str1 = 'hello';
let str2 = 'hi';

console.log(n1 + n2);
console.log(n1 + str1);
console.log(str1 + str2);

//typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴

console.log(typeof n1);
console.log(typeof (typeof n1));

//==(동등) 연산자 및 ===(일치) 연산자
//동등 연산자는 타입이 다를 경우 형 변환을 하여 비교 일치 연산자는 형 변환을 하지 않음

console.log(1 == '1');
console.log(1 === '1');

//!!연산자는 피연산자를 불린값으로 변환

console.log(!!0);
console.log(!!1);
console.log(!!'');
console.log(!!'hello');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!{}); // 객체는 비어있어도 true
console.log(!![]); // 배열도 객체
console.log(!![1, 2, 3])
