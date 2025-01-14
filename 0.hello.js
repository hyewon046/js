// console.log('Hello Javascript!');

//1.7 예습

// const arr =[1, 2, 3];
// arr.forEach(console.log);
// arr.forEach(alert);

//교재에는 var로 할당했는데 var쓰지말라해서 let으로 할당해봄
// let userId = 1;
// let userName = 'Lee';

// let user = {id:1, name:'Lee'};

// let users = [
//     { id:1, name: 'Lee'},
//     { id:2, name: 'kim'}
// ];
// console.log(users);

// let result = 10+20;
// console.log(result);

// console.log(score); //undefined (참조에러 아님, 변수호이스팅 발생)
// let score;

// console.log(score); //undefined

// score=80;
// var score; 

// console.log(score); //80
// console.log(`1 + 2 = ${1+2}`); //백틱 이용한 표현식 삽입
// console.log(`<ul> 
//     <li> 물 </li>
// </ul>`); //멀티라인 문자열

// let foo;
// foo=3;
// console.log(typeof foo);
// foo='foo';
// console.log(typeof foo);
// foo=false;
// console.log(typeof foo); //타입자유롭게 변환 가능

// foo : { //foo라는 식별자가 붙은 레이블 블록문
//     console.log(1);
//     break foo;
//     console.log(2);
// }
// console.log('Done!');

//outer: for (var i = 0; i < 3; i ++ ) { 
//     for (var j = 0; j < 3; j ++ ) {  
//         if (i + j === 3) break outer; 
//         console .log(`inner [${ i }, ${ j }]`) ; 
//     }
// }
// console .log('Done!') ; 

// var string = 'Hello World'; 
// var search = 'l'; 
// var index; 

// for ( var i=0; i < string.length ; i ++ ) { //문자열에서 특정 문자의 인덱스찾기
//     // 문자열의 개별 문자가 ’이면 
//     if (string[i]===search) { 
//         index=i; 
//         break ;
//     }
// }
// console .log(index);

if('') console.log(x);

if ('') console.log('1') ; //이건 아직 잘 모루겟다
if (true) console.log('2') ; 
if (0) console.log('3') ; 
if ('str') console.log('4') ;
if (null) console.log('5') ;

