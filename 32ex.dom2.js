const box = document.querySelector('div');

Array.from(document.getElementsByTagName("button")).forEach(button => {
    button.addEventListener('click', e => {
        // inline style이 아닌 경우 window.getComputedStyle로
        // 스타일 값을 가져와야함
        let width = window.getComputedStyle(box).width;
        width = width.substring(0, width.length-2);
        let height = window.getComputedStyle(box).height;
        height = height.substring(0, height.length-2);
        
        switch (e.target.textContent) {
            case '배경색blue':
                box.style.backgroundColor = 'blue';
            break;
            case '배경색red':
                box.style.backgroundColor = 'red';
            break;
            case '크기X2':
                box.style.width = width * 2 +'px';
                box.style.height = height * 2 + 'px';
            break;
            case '크기/2':
                box.style.width = width/2 + 'px';
                box.style.height = height/2 + 'px';
            break;
            case 'blue클래스':
                box.classList.add('blue');
                box.classList.remove('red');
                box.style.width = width * 2 +'px';
                box.style.height = height * 2 + 'px';
            break;
            case 'red클래스':
                box.classList.add('red');
                box.classList.remove('blue')
                box.style.width = width/2 + 'px';
                box.style.height = height/2 + 'px';
            break;
        }
    });
});