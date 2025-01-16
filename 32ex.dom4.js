const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.textContent) {
            case '+':
                const fileList = document.getElementById('fileList');
                
                // fileList.appendChild(fileList);
            break;
            case '-':
                

            break;
        }
    });
});