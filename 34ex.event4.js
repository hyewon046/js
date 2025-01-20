// event실습 4 : 성적처리 (동적 테이블 생성)
// 데이터 : 성명,국어,영어,수학
// 기능 : 등록, 삭제, 개인총점, 과목총점 연산

// const regist = document.querySelector('button');
// regist.addEventListener('click', e=>{
//     const type = document.querySelectorAll('input[type="text"]');

//     //appendchild도 써야할것같으다
// });

const regist = document.querySelector('button');
const name = document.querySelector('input[type="text"]:nth-child(1)');
const kor = document.querySelector('input[type="text"]:nth-child(3)');
const eng = document.querySelector('input[type="text"]:nth-child(5)');
const math = document.querySelector('input[type="text"]:nth-child(7)');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot tr');

document.addEventListener('DOMContentLoaded', () => {
    const regist = document.querySelector('button');
    const name = document.querySelector('input[type="text"]:nth-child(1)');
    const kor = document.querySelector('input[type="text"]:nth-child(3)');
    const eng = document.querySelector('input[type="text"]:nth-child(5)');
    const math = document.querySelector('input[type="text"]:nth-child(7)');
    const tbody = document.querySelector('tbody');
    const tfoot = document.querySelector('tfoot tr');

    function calTotal() {
        let korSum = 0, engSum = 0, mathSum = 0;
        tbody.querySelectorAll('tr').forEach(row => {
            korSum += parseInt(row.cells[1].textContent);
            engSum += parseInt(row.cells[2].textContent);
            mathSum += parseInt(row.cells[3].textContent);
        });
        tfoot.cells[1].textContent = korSum;
        tfoot.cells[2].textContent = engSum;
        tfoot.cells[3].textContent = mathSum;
    }
    // regist.addEventListener('click', () => {

    // });
    function add() {
        const nameValue = name.value;
        const korValue = parseInt(kor.value);
        const engValue = parseInt(eng.value);
        const mathValue = parseInt(math.value);
        const total = korValue + engValue + mathValue;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nameValue}</td>
            <td>${korValue}</td>
            <td>${engValue}</td>
            <td>${mathValue}</td>
            <td>${total}</td>
            <td><button class="delete">삭제</button></td>
        `;
        tbody.appendChild(row);

        row.querySelector('.delete').addEventListener('click', () => {
            row.remove();
            calTotal();
        });

        calTotal();

        name.value = '';
        kor.value = '';
        eng.value = '';
        math.value = '';
    }

    regist.addEventListener('click', add);
});