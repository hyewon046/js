//http://localhost:7777/37ex.rest_axios.html

const listPerson = document.querySelector('#listPerson');
const getPerson = document.querySelector('#getPerson');
const pid = document.querySelector('#pid');
const pname = document.querySelector('#pname');
const page = document.querySelector('#page');
const registPerson = document.querySelector('#registPerson');
const tbody = document.querySelector('tbody');
const sel = document.querySelector('#sel');
const asc = document.querySelector('#asc');
const desc = document.querySelector('#desc');

//배열 선언
let responseArr = null;

//전체 데이터 조회
listPerson.addEventListener('click', e => {
    axios('http://localhost:7777/persons')
    .then(response => {
        responseArr=response.data; //arr 선언안하고 바로 넣어도됨
        printList(responseArr);
    })
    .catch(err => console.error(err));
});

//id로 조회하기
getPerson.addEventListener('click', e => {
    const sid = document.querySelector('#sid');
    //아이디없이 조회 누르면 팝업띄우고, 아이디 적는칸에 포커스
    if (!sid.value) {
        alert('검색하실 아이디를 입력해 주시랑께요!');
        sid.focus();
        return;
    }
    axios(`http://localhost:7777/persons/${sid.value}`)
    .then(response => {
        tbody.textContent = '';
        const person = response.data;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${person.id}</td>
            <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
            <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr)})
    .catch(err => console.error(err));
});

//post로 새로운 행 등록하기
registPerson.addEventListener('click', e => {
    axios.post('http://localhost:7777/persons', 
        {id: pid.value, name: pname.value, age: +page.value})
    .then(response => console.log(response))
    .catch(err => console.error(err))
});

//오름차순 정렬
asc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'ASC')
});

//내림차순 정렬
desc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'DESC')
});

//정렬하고 테이블에 추가하는 메소드
const printList = (responseArr, selValue, sort) => {
    if (selValue) {
        //selValue가 숫자라면
        if (typeof selValue === 'number') {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {
                    return obj1[selValue] - obj2[selValue];
                } else if (sort==='DESC') {
                    return obj2[selValue] - obj1[selValue];
                }
            });
        } else {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {
                    //localecompare : 문자열비교, 영어 숫자 외에는 그냥 compare사용불가
                    //양수 혹은 음수 리턴
                    return obj1[selValue].localeCompare(obj2[selValue]);
                } else if (sort==='DESC') {
                    return obj2[selValue].localeCompare(obj1[selValue]);
                }
            });
        }
    }
    //innerhtml 사용전 tbody.textContent 초기화
    tbody.textContent = '';    
    for (let obj of responseArr) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${obj.id}</td>
            <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
            <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${obj.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);    
    }    
};

//수정 
const modifyPerson = pid => {
    const confirm = window.confirm('수정하시겠습니까?');
    if (!confirm) return;
    const pname = document.querySelector('#name'+pid).value;
    const page = document.querySelector('#age'+pid).value;
    axios.put(`http://localhost:7777/persons/${pid}`, 
        {id:pid, name:pname, age:page}
    )
    .then(() => printList(responseArr))
    .catch(err => console.error(err));
}

//삭제
const deletePerson = pid => {
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;
    axios.delete(`http://localhost:7777/persons/${pid}`)
    .then(() => printList(responseArr))
    .catch(err => console.error(err));   
}

//처음부터 실행하고 시작함
listPerson.click();