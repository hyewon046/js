/*
 [자바스크립트 실습 : 상품관리]

 - 기능 : 상품목록, 상품등록, 상품상세, 상품수정, 상품삭제
 - 상품정보 : 상품번호, 제조사명, 상품명, 상품수량, 상품가격
 - TODO
    1. 상품정보 객체화(또는 배열)
    2. 기능 함수화
    3. 기능 테스트
*/

let productMap = new Map([]);

class Product {
    constructor(pno, pfactory, pname, pamount, pprice) {
        this._pno = pno;
        this._pfactory = pfactory;
        this._pname = pname;
        this._pamount = pamount;
        this._pprice = pprice;
    }
    get pno() {
        return this._pno;
    }
    set pno(pno) {
        this._pno = pno;
    }
    get pfactory() {
        return this._pfactory;
    }
    set pfactory(pfactory) {
        this._pfactory = pfactory;
    }
    get pname() {
        return this._pname;
    }
    set pname(pname) {
        this._pname = pname;
    }
    get pamount() {
        return this._pamount;
    }
    set pamount(pamount) {
        this._pamount = pamount;
    }
    get pprice() {
        return this._pprice;
    }
    set pprice(pprice) {
        this._pprice = pprice;
    }
}

class ProductManager {
    listProduct() {
        productList.forEach(
            product => {detailProduct(product)}
        );
    }
    registProduct(product) {
        productList.push(product);
    }
    detailProduct(product) {
        console.log(
            '상품번호: ' + product.pno,
            '제조사명: ' + product.pfactory,
            '상품명: ' + product.pname,
            '상품수량: ' + product.pamount,
            '상품가격: ' + product.pprice
        );
    }
    modifyProduct(product) {
        productList = productList.map(
            prod => {
                if (prod.pno == product.pno)
                    return product;
                else return prod;
            }
        );
    }
    deleteProduct(pno) {
        productList = productList.filter(
            product => {return product.pno != pno;}
        );
    }
}

