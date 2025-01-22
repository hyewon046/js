//37ex.axios.js

//JSON Server, persons.json 사용
//npx json-server --watch persons.json --port 7777 --static ../
//http://localhost:7777/37ex.axios.html

//axios(https://axios-http.com)를 활용하여 
//get, post, put, patch, delete 호출

//get
axios('http://localhost:7777/persons')
.then(response => console.log(response))
.catch(err => console.error(err))

//post
axios.post('http://localhost:7777/persons', {
    id: "3",
    name: "kim gun",
    age: 20
})
.then(response => console.log(response))
.catch(err => console.error(err))

//put
axios.put('http://localhost:7777/persons/3', {
    id: "3",
    name: "kim min gyu",
    age: 29
})
.then(response => console.log(response))
.catch(err => console.error(err))

//patch
axios.patch('http://localhost:7777/persons/3', {
    name: "kim boy"
})
.then(response => console.log(response))
.catch(err => console.error(err))

//delete
axios.delete('http://localhost:7777/persons/3')
.then(response => console.log(response))
.catch(err => console.error(err))

// 병렬 비동기 호출
// 만약 post호출에 10초, comments호출에 6초, users호출에 3초 걸린다면
// Promise.all로 병렬 호출하면 최고 오래걸리는 10초보다 조금 더 걸려서
// 병렬 비동기 호출을 모두 수행할 수 있음

Promise.all([ //fetch써도됨, get말고 다른거는 위에 썼던것처럼 아래 값 넣으면 됨
    axios('https://jsonplaceholder.typicode.com/posts'),
    axios('https://jsonplaceholder.typicode.com/comments'),
    axios('https://jsonplaceholder.typicode.com/users')
])
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})

