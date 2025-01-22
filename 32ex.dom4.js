const fileList = document.getElementById('fileList');
const nameList = document.querySelector('#nameList ul');

// 파일 입력 요소와 버튼의 이벤트 처리
fileList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        if (target.dataset.btnType === '+') {
            addFileInputSet();
        } else if (target.dataset.btnType === '-') {
            const parentDiv = target.parentElement;
            removeFileInputSet(parentDiv);
        }
    }
});

// 파일 입력 요소 변경 시 파일 이름을 추가하는 이벤트 리스너
const handleFileSelect = (event) => {
    const fileInput = event.target;
    const fileName = fileInput.files[0] ? fileInput.files[0].name : null;

    if (fileName) {
        addFileNameToList(fileName);
    }
};

// 새로운 파일 입력 세트를 추가하는 함수
const addFileInputSet = () => {
    const fileInputSet = document.createElement('div');

    // 파일 입력 요소
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileSelect);

    // "+" 버튼
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.dataset.btnType = '+';

    // "-" 버튼
    const removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.dataset.btnType = '-';

    // 요소 추가
    fileInputSet.appendChild(fileInput);
    fileInputSet.appendChild(addButton);
    fileInputSet.appendChild(removeButton);
    fileList.appendChild(fileInputSet);
};

// 파일 이름을 목록에 추가하는 함수
const addFileNameToList = (fileName) => {
    const li = document.createElement('li');
    li.textContent = fileName;
    nameList.appendChild(li);
};

// 파일 입력 세트를 제거하는 함수
const removeFileInputSet = (fileInputSet) => {
    if (fileList.children.length > 1) {
        fileList.removeChild(fileInputSet);
    } else {
        alert('최소 하나의 파일 선택이 필요합니다');
    }
};