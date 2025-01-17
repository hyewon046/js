// event실습 3 : 입력필드 검증(validation)

// 전송버튼을 클릭하면...
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수체크
// 3. 취미는 2개이상 선택
// 조건을 모두 만족하면 '폼이 전송되었습니다' alert
// 그렇지 않으면 해당 폼에 포커스

// 초기화버튼 클릭시 폼 초기화

const form = document.querySelector('form[name="writeForm"]');

document.getElementById("submit").addEventListener('click', e => {
    const uid = document.querySelector('input[name="uid"]');
    if(uid.value.length > 12) {
        alert('아이디를 12자리 이하로 입력해주세요');
        uid.focus();
        return false;
    }

    const upass = document.querySelector('input[name="upass"]');
    if(upass.value.length > 12) {
        alert('비밀번호를 12자리 이하로 입력해주세요');
        upass.focus();
        return false;
    }
    
    const gender = document.querySelector('input[type="radio"]:checked');
    if (!gender) {
        alert('성별을 선택해주세요')
        return false;
    }
    // if(gender.checked == false) { //이렇게 갖고오면 gender는 두개라 selectorall로 갖고와서
    //     alert('성별중하나를 선택해주세요'); //foreach로 각각 검사해야함
    // }
    
    const hobbys = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;
    hobbys.forEach(hobby => {
        if(hobby.checked) {
            count++;
        }  
    });
    if(count<2) {
        alert('취미를 2개이상 선택해주세요!');
        return false;
    }

    alert('폼이 전송되었습니다!');
    // else form.addEventListener('focus', e => {
    //     this.focus();
    // });
});
