//배열은 대괄호([])를 사용
let arr1 = ['zero', 'one', 'two', 'three'];

console.log(arr1);

//배열 내 위치 인덱스값을 넣어 원하는 원소에 접근
//처음은 0번 인덱스이다.

console.log(arr1[1]);

//객체와 같이 동적으로 원소를 추가할 수 있다.

arr1[5] = 'five';

console.log(arr1);
//빈 공간은 undefined가 할당
console.log(arr1[4]);

//배열엔 length 프로퍼티가 존재
//length의 값과 존재하는 원소 개수가 일치하지는 않는다.
console.log(arr1.length);

//push메서드를 이용해 배열의 맨 마지막에 원소를 추가
arr1.push('six');
console.log(arr1);

//배열도 객체이기 때문에 인덱스 숫자가 아닌 다른 프로퍼티의 추가가 가능하다.
arr1.name = '배열입니다.';

console.log(arr1);

//for in 및 for
//for in을 이용하면 배열 요소가 아닌 것도 열거, for는 배열 요소인것만 열거

for(i in arr1)
{
    console.log(arr1[i]);
}

for(let i = 0; i < arr1.length; i++)
{
    console.log(arr1[i]);
}

//delete 사용이 가능하지만 undefined로 할당, 완전 삭제는 splice메서드를 이용
delete arr1[1];
console.log(arr1);

arr1.splice(1, 1);
console.log(arr1);