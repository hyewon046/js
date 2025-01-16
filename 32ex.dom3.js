// 테이블 만들기
// document.querySelector('button').addEventListener('click', () => {
//     const table = document.createElement('table');
//     const thead = document.createElement('thead'); 
//     const th = document.createElement('th');
//     th.textContent = '번호';
//     th.textContent = '성명';
//     th.textContent = '나이';
//     th.textContent = '키';
//     thead.appendChild(th);
//     table.appendChild(thead);
//     document.body.appendChild(table);
// }); 노가다ver



document.querySelector('button').addEventListener('click', () => {
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>번호</th><th>성명</th><th>나이</th><th>키</th>
        </tr>
        <tr>
            <td>1</td><td>홍길동</td><td>20</td><td>170</td>
        </tr>
        <tr>
            <td>2</td><td>강감찬</td><td>30</td><td>160</td>
        </tr>`;
        // table.style.border = '1px solid black'; style은 html에 보통 씀
        document.body.appendChild(table);
});