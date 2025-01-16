// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.textContent) {
//             case '+':
//                 const fileList = document.getElementById('fileList');
                
//                 // fileList.appendChild(fileList);
//             break;
//             case '-':
                

//             break;
//         }
//     });
// });

document.querySelectorAll("#fileList button").forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e.target.dataset.btnId);
        console.log(e.target.dataset.btnType);

    });
});