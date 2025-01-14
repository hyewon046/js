// 기본타입 값은 불변(immutable)
let num = 100;
let numStr = num.toString();
console.log(typeof numstr, numStr); // string 100
console.log(typeof num, num); // number 100

console.log(typeof String(1)); //string
console.log(typeof String(NaN)); //string 
console.log(typeof String(true)); //string 
console.log(typeof Number('1')); //number
console.log(typeof Number(true)); //number
console.log(typeof Boolean('')); //boolean
console.log(typeof Boolean('a')); //boolean
console.log(typeof Boolean(NaN)); //boolean
console.log(typeof Boolean({})); //boolean (true)
console.log(typeof Boolean([])); //boolean (true)

//string타입이어도 출력에는 따옴표 없음
console.log((1).toString()); //'1'
console.log(NaN+''); //'NaN'
console.log(+'0'); //0
console.log(+true); //1
console.log(true*5); //5
console.log(!!'x'); //true
console.log(!!0); //false
console.log(!!NaN); //true(X) => false
console.log(!!{}); //false(X) => true

console.log('10'+2); //'102'
console.log(10*'10'); //100
console.log(!0); //true

console.log(0+''); //'0'
console.log(-0+''); //'-0'(X) => 0 (-0이긴한데 표시는 0)
console.log(NaN+''); //'NaN'
console.log(Infinity+''); //'Infinity'
console.log(-Infinity+''); //'-Infinity'
console.log(true+''); //'true'
console.log(false+''); //'false'
console.log(null+''); //'null'
console.log(undefined+''); //'undefined'
// console.log((Symbol())+''); //'Symbol()'(X) => typeError
console.log(({})+''); //'{}'(X) => [object Object]
console.log((Math)+''); //'Math'(X) => [object Math]
console.log(([])+''); //'[]'(X) => 아무것도 안나옴 빈공간
console.log([10,20]+''); //'10,20'
console.log((function(){})+''); //'function(){}'
console.log(Array+''); //'Array'(X) => function Array() { [native code] }
console.log(1-'1'); //0
console.log(1*'10'); //10
console.log(1/'one'); //undefined(X) => NaN
console.log('1'>0); //true
console.log(+''); //undefined(X) => 0
console.log(+'0'); //0
console.log(+'1'); //1
console.log(+'string'); //undefined(X) => NaN
console.log(+true); //1
console.log(+false); //0
console.log(+undefined); //undefined(X) => NaN
// console.log(+Symbol()); //undefined(X) => typeError
console.log(+{}); //undefined(X) => NaN
console.log(+[]); //undefined(X) => 0
console.log(+[10,20]); //undefined(X) => NaN
console.log(+(function(){})); //undefined(X) => NaN
console.log(!null); //true
console.log(!0); //true
console.log(!-0); //false(X) => true
console.log(!NaN); //false(X) => true
console.log(!''); //true

//단축 평가(Short-Circuit Evaluation)
console.log('Cat'&&'Dog'); //Dog
console.log('Cat'||'Dog'); //Dog(X) => Cat (or은 하나만 true여도 되므로 cat이 true니까 우항 평가할 필요없이 cat을 출력)
