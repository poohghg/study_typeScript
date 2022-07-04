"use strict";
function basic() {
    function arrowFunction() {
        // 기본적인 화살표 함수
        const add = (param) => console.log(param);
        console.log(add(1));
        const defaultParma = (a = 1, b) => {
            return a.toString() + b.toString();
        };
        // 타입스크립트에서는 인수와 인자의 갯수가 같아야한다.
        // 매개변수의 기본값은 인수값이 null 또는 undefined일때 적용된다.
        // fasly와는 다르다.
        console.log(defaultParma(undefined, 5));
    }
    function spreadOperator() {
        const nums = [1, 2, 3];
        let totalArr = [...nums];
        const arr = Array.from({ length: 10 }, (_, index) => [
            index,
        ]);
        const newArray = new Array().concat(...arr);
        console.log(newArray);
        const [a, b, c, d, e, ...f] = newArray;
        console.log(a);
        console.log(f);
    }
    spreadOperator();
    function restParameter() {
        // 나머지 매개변수들은 함수내 배열로 병합된다.
        const addTotal = (a, ...numbers) => {
            return numbers.reduce((prev, curr) => prev + curr, 0);
        };
        console.log(addTotal(1, 2, 3, 45));
    }
    // restParameter();
}
basic();
