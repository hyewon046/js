/*
 [자바스크립트 실습 : 상품관리]

 - 기능 : 상품목록, 상품등록, 상품상세, 상품수정, 상품삭제
 - 상품정보 : 상품번호, 제조사명, 상품명, 상품수량, 상품가격
 - TODO
    1. 상품정보 객체화(또는 배열)
    2. 기능 함수화
    3. 기능 테스트
*/

//상품리스트를 저장할 배열
let productList = [
];

function Product (pno, pfactory, pname, pamount, pprice) { //생성자함수로 객체생성
    this.pno = pno;
    this.pfactory = pfactory;
    this.pname = pname;
    this.pamount = pamount;
    this.pprice = pprice;
};

function productManager() { //생성자함수로 기능구현
    this.listProduct = function() {
        productList.forEach(
            product => {this.detailProduct(product)}
        );
    },
    this.registProduct = function(product) {
        productList.push(product); //concat도써도됨
    },
    this.detailProduct = function(product) {
        console.log(
            '상품번호: ' + product.pno,
            '제조사명: ' + product.pfactory,
            '상품명: ' + product.pname,
            '상품수량: ' + product.pamount,
            '상품가격: ' + product.pprice
        );
    },
    this.modifyProduct = function(product) {
        productList = productList.map(
            prod => {
                if (prod.pno == product.pno)
                    return product;
                else return prod;
            }
        );
    },
    this.deleteProduct = function(pno) {
        productList = productList.filter(
            product => {return product.pno != pno;}
        );
    }
}

const pm = new productManager(); //생성자함수는 직접호출불가하므로 인스턴스메소드 필요

pm.registProduct(new Product(1, 'A공장', '상품1', 5, 1000));
pm.registProduct(new Product(2, 'B공장', '상품2', 10, 1500));

pm.listProduct();
pm.modifyProduct(new Product(2, 'C공장', '상품3', 18, 5000));
pm.listProduct();


