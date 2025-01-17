// event실습 1 : 숫자 카운터 (요구시간:10분)
// 증가버튼 클릭시 1씩 증가
// 감소버튼 클릭시 1씩 감소
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const counter = document.getElementById('counter');

increase.addEventListener('click', ()=>{
    counter.value = +(counter.value) + 1;
});

decrease.addEventListener('click', ()=>{
    counter.value = +(counter.value) - 1;
});


// 실습 1-1 : input에 값을 직접 입력못하도록(버튼만으로 값이 바뀌게)
// 힌트 : 포커스이벤트
counter.addEventListener('focus', ()=> {
    counter.blur();
    //또는 return false;
});