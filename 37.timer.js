// timer function
// setTimeout(콜백함수, 밀리세컨드) : 밀리세컨드 후 콜백함수 호출
// setInterval(콜백함수, 밀리세컨드) : 밀리세컨드 마다 콜백함수 호출

const span = document.querySelector('span');

// 1000밀리초 후에 콜백함수를 한번만 수행
// setTimeout(() => {
//     span.textContent = '1000밀리초 후 나타남!';
// }, 1000);

// let count = 0;
// 1000밀리초마다 콜백함수를 수행
// setInterval(콜백함수, 밀리초, 콜백함수인자)
// const interval = setInterval(arg => {
//     span.textContent = arg + count++;
// }, 1000, "time : ");

// // clearInterval : setInterval 종료
// const stopBtn = document.querySelector('#stop');
// stopBtn.addEventListener('click', e => {
//     clearInterval(interval);
// });

// 실습 : start, pause, stop 구현
// let count = 0;
// const interval = '';
// const startBtn = document.querySelector('#start');
// startBtn.addEventListener('click', ()=>{
//     interval = setInterval(arg => {
//         span.textContent = arg + count++;
//     }, 1000, "time : ");
// });
// const pauseBtn = document.querySelector('#pause');
// pauseBtn.addEventListener('click', e => {
//     clearInterval(interval);

// }); //일시정지

// const stopBtn = document.querySelector('#stop');
// stopBtn.addEventListener('click', () => {
//     clearInterval(interval);
//     pauseBtn.
// });

let count = 0;
let interval = null;
// 시작상태여부 (flag변수 : 상태정보(on/off, true/false, 0/1) 저장)
let started = false; 
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', e => {
    // pause버튼 활성화
    pauseBtn.disabled = false;
    // 시작상태가 아닐때만 실행
    if (!started) {
        interval = setInterval(arg => {
            span.textContent = arg + count++;
        }, 1000, "time : ");
    }
});

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    clearInterval(interval);
});

// clearInterval : setInterval 종료
const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    //시작버튼, 포즈버튼 비활성화
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    clearInterval(interval);
});

