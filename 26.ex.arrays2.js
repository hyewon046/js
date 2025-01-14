// 배열 고차함수 실습

const arr1 = [1, '2', 3, '4', 5, '6', 7, '8'];

// 1. arr1 배열의 모든 요소를 숫자타입으로 변경 (forEach 사용)
const forEacharr1 = arr1.forEach(function(ele) {
    console.log(+ele);
});
arr1.forEach(ele => +ele);
console.log(forEacharr1);

// 2. arr1 배열의 모든 요소를 3배한 배열을 출력 (map 사용)
const maparr1 = arr1.map(function(ele) {
    return ele*3;
});
console.log(maparr1);
console.log(arr1.map(ele => ele*3)); //간략하게 

// 3. arr1 배열의 요소 중 5의 배수가 있는지 확인 (some 사용)
const somearr1 = arr1.some(function(ele) {
    return ele%5==0;
});
console.log(somearr1);

// 4. arr1 배열의 모든 요소가 짝수인지 확인 (every 사용)
const everyarr1 = arr1.every(function(ele) {
    return ele%2==0;
});
console.log(everyarr1);

// 5. arr1 배열의 모든 요소의 합을 출력 (reduce 사용)
const sum = arr1.reduce(function(acc, curr) {
    return acc+(+curr);
},0);
console.log(sum);

// 6. arr1 배열에서 3의 배수들만 추출하여 배열 생성해 출력 (filter 사용)
const filterarr1 = arr1.filter(function(ele) {
    return ele%3==0;
});
console.log(filterarr1);
console.log(arr1.map(ele=>+ele).filter(ele => ele%3==0)); //간략하게

// 7. arr1 배열에서 짝수들만 추출하여 각각 3배한 배열의 합계를 출력
//    (filter, map, reduce 사용)
const object = arr1.filter(function(ele){
    return ele%2==0;
}).map(function(ele) {
    return ele*3;
}).reduce(function(acc, curr) {
    return acc+curr;
}, 0);
console.log(object);


const persons = [
    {name:'홍길동', age:20, address:{si:'서울시', dong:'역삼동'}},
    {name:'이길동', age:40, address:{si:'서울시', dong:'신사동'}},
    {name:'김길동', age:30, address:{si:'서울시', dong:'논현동'}},
    {name:'최길동', age:60, address:{si:'평양시', dong:'평양동'}},
    {name:'박길동', age:50, address:{si:'개성시', dong:'개성동'}}
];

// 1. 서울시에 사는 사람들의 나이의 합계를 출력
const totalAge = persons.filter(function(ele) {
    return ele.address.si=='서울시';
}).reduce(function(acc, curr) {
    return acc+curr.age;
}, 0);
console.log(totalAge);

// 2. 서울시에 살며 30세 이상인 사람들만 추출한 배열 출력
const personarr1 = persons.filter(function(ele) {
    return ele.address.si == '서울시' && ele.age >= 30;
});
console.log(personarr1);

// 3. 각 사람의 주소 중 시이름에서 '시' 동이름에서 '동'을
//    제거하고 이름, 나이, 주소를 출력    ex) 홍길동,20세,서울 역삼
const personarr2 = persons.map(function(ele) {
    return ele.name+", "+ele.age+"세, "+ele.address.si.substring(0,2)+ ", "+ele.address.dong.substring(0,2);
});
console.log(personarr2);

// 4. 각 사람의 주소에 contury:'대한민국'을 추가하고
//    이름, 나이, 주소를 출력    ex) 홍길동,20세,대한민국 서울 역삼
const personarr3 = persons.forEach(function(ele) {
    ele.country = '대한민국';
    console.log(`${ele.name},${ele.age}세,${ele.country} ${ele.address.si.substring(0,ele.address.si.length-1)} ${ele.address.dong.substring(0,2)}`);
});
console.log(personarr3);

//간략하게한 선생님 ver 있음 참고