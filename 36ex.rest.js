/*
    [REST API 실습]
    1. JSON서버 구동
    2. 기능
      (1) 데이터가져오기버튼 누르면 테이블에 전체 데이터 표시
         > GET, persons 호출하여 테이블에 표시
      (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
        > POST, /persons
      (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후 
        데이터 수정
        > PUT, /persons/아이디
      (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
        > DELETE, /persons/아이디
*/

const xhr = new XMLHttpRequest();

//조회됨
document.querySelector('#listPerson').addEventListener('click', e => {
    xhr.open('GET', 'http://localhost:7777/persons');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.querySelector('tbody').textContent = '';
            const arr = JSON.parse(xhr.responseText);
            if (arr!=null) {
                for (let obj of arr) {
                    let tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><input class="pid" type="text" value=${obj.id}></td>
                        <td><input class="pname" type="text" value=${obj.name}></td>
                        <td><input class="page" type="text" value=${obj.age}></td>
                        <td> <button id="edit">수정</button>&nbsp;
                             <button id="delete">삭제</button>
                        </td>
                    `;
                    document.querySelector('tbody').appendChild(tr);            
                }
            }
        } else {
            console.error('에러발생!', xhr.status, xhr.statusText);
        }
    };
});

// 추가는 됨
document.querySelector('#registPerson').addEventListener('click', ()=> {
    xhr.open('POST', 
        'http://localhost:7777/persons');
    xhr.send(JSON.stringify({id:+document.querySelector('.pid').value, 
        name:document.querySelector('.pname').value, 
        age:+document.querySelector('.page').value}));
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.querySelector('tbody tr').textContent
                = xhr.response;
        } else {
            console.error('에러발생!', xhr.status, xhr.statusText);
        }
    };
});

// 안된;
document.querySelector('#edit').addEventListener('click', ()=> {
    const confirm = window.confirm('수정하시겠습니까?');
    if(!confirm) return;
    xhr.open('PUT', 'http://localhost:7777/persons/'+document.querySelector('.pid').value);
    xhr.send(JSON.stringify({ id:+document.querySelector('td').value,
        name:document.querySelector('td').value, 
        age:+document.querySelector('td').value}));
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.querySelector('tbody tr').textContent
                = xhr.response;
        } else {
            console.error('에러발생!', xhr.status, xhr.statusText);
        }
    };
});

//안됨..
document.querySelector('td.button').addEventListener('click', ()=> {
    const confirm = window.confirm('삭제하시겠습니까?');
    if(!confirm) return;
    xhr.open('DELETE', 
        'http://localhost:7777/persons/'+document.querySelector('.pid').value);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.querySelector('tbody tr').textContent
                = xhr.response;
        } else {
            console.error('에러발생!', xhr.status, xhr.statusText);
        }
    };
});



