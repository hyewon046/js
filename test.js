/*
    표현식 (expression) : 파싱해서 값이 되는 문장
                        표현식은 변수에 할당하거나 함수의 인자가 될 수 있음
    문장 (statement) : 실행단위가 되는 구문
                      문장은 변수에 할당하거나 함수의 인자가 될 수 없음
*/

let j; //문장
let i = 0; //문장
i = 3 //표현식
i = 3; //문장
'hi' //표현식
'hi'; //문장
3 //표현식
// {name:'홍길동', age : 20} //표현식
const obj = {name:'홍길동', age:20}; //문장

// var v = 1;
// function func() {
//     console.log(v); //1
// }
// func();

// var v2 = 2;
// function func2() {
//     console.log(v2); //undefined, v2 호이스팅
//     var v2 = 3;
// }
// func2();

console.log(v); //undefined
function outer() {
    console.log(v); //undefined
    function inner() {
        console.log(v); //undefined
        var v = 'inner';
        console.log(v); //inner
    }
    var v = 'outer';
    inner();
    console.log(v); //outer
}
outer();
var v = 'global';

var v =1;
function func() {
    console.log(v); //초기화 안됐다고 에러
    let v = 3; //왜 let일땐 호이스팅이 안될까?
}
func();