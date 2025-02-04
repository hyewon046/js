// event실습 4 : 성적처리 (동적 테이블 생성)
// 데이터 : 성명,국어,영어,수학
// 기능 : 등록, 삭제, 개인총점, 과목총점 연산

const nameInput = document.querySelector("input:nth-child(1)");
const koreanInput = document.querySelector("input:nth-child(2)");
const englishInput = document.querySelector("input:nth-child(3)");
const mathInput = document.querySelector("input:nth-child(4)");
const registerButton = document.querySelector("button");
const tbody = document.querySelector("tbody");
const tfoot = document.querySelectorAll("tfoot td");

registerButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const korean = parseInt(koreanInput.value.trim()) || 0;
    const english = parseInt(englishInput.value.trim()) || 0;
    const math = parseInt(mathInput.value.trim()) || 0;
    const total = korean + english + math;

    if (!name) {
        alert("성명을 입력하세요.");
        return;
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${korean}</td>
        <td>${english}</td>
        <td>${math}</td>
        <td>${total}</td>
        <td><button class="delete">삭제</button></td>
    `;

    tbody.appendChild(newRow);

    updateTotals();

    // Clear inputs
    nameInput.value = "";
    koreanInput.value = "";
    englishInput.value = "";
    mathInput.value = "";
});

tbody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const row = event.target.closest("tr");
        tbody.removeChild(row);
        updateTotals();
    }
});

const updateTotals = () => {
    let koreanTotal = 0;
    let englishTotal = 0;
    let mathTotal = 0;

    tbody.querySelectorAll("tr").forEach(row => {
        const cells = row.querySelectorAll("td");
        koreanTotal += parseInt(cells[1].textContent);
        englishTotal += parseInt(cells[2].textContent);
        mathTotal += parseInt(cells[3].textContent);
    });

    tfoot[1].textContent = koreanTotal;
    tfoot[2].textContent = englishTotal;
    tfoot[3].textContent = mathTotal;
};