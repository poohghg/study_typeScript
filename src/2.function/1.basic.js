"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function basicFunction() {
    function add(num1, num2) {
        // return은 기본적으로 타입스크립트가 추론한다.
        return num1 + num2;
    }
    // add(num1: number, num2: number): number
    add(1, 2);
    // 함수의 리턴타입을 명시적으로 설정할 수도 있다.
    // 타입을 명시적으로 설정할 이유가 없다면, 타입을 설정하는
    // 대신 타입스크립트가 타입을 추론 하는게 좋다.
    function addTpye(num1, num2) {
        // return 타입은 기본적으로 타입스크립트가 추론한다.
        return num1 + num2;
    }
    // 기본적으로 return문으로 함수를 빠져나오지 않는다면 자바스크립트엔진은 undefined을 반환함.
    // void는 return문을 명시하지 않았을때 기본적인 타입스크립트의 메커니즘
    function printLog(action, num1, num2) {
        console.log(action(num1, num2));
    }
    // 자바스크립트 메커니즘상 undefined을 반환하지만 타입스크립트에서
    // 리턴타입으로 undefined을 사용하려면 다음과 같이 사용하여야함.
    function printLog1(action, num1, num2) {
        console.log(action(num1, num2));
        return;
        // return undefined;
    }
    const result = printLog(add, 1, 2);
    console.log(result);
    // TypeScript는 undefined 과 null 둘 다 각각 자신의 타입 이름으로 undefined , null로 사용
    // 이 밖에 이 변수들에 할당할 수 있는 값은 없다.
    let u = undefined;
    let n = null;
}
function functionArgs() {
    /**
     타입스크립트에서 인자를 모두 필수 값으로 간주한다.
     더많거나, 더적으면 에러를 발생시킨다.
     */
    function args() { }
}
// basicFunction();
function typeFunction() {
    function add(n1, n2) {
        return n1 + n2;
    }
    // any 타입에 다양한 값을 할당할 수 있다.
    let addF;
    addF = add;
    addF = 1;
    // 변수에 함수를 할당하기전에 변수에 함수 타입을 설정할 수 있다.
    let fwithTyps;
    // error
    // fwithTyps = 6;
    fwithTyps = add;
    console.log(fwithTyps(5, 5));
    // 화살표 함수
    let addN = (n1, n2) => n1 + n2;
    console.log(addN(1, 2));
}
// typeFunction();
function callback() {
    // 콜백함수에 return타입을 명시하면 다음 타입을 리턴한다.
    // 인자의 함수 리턴값이랑은 상관이없다
    // 반환된 값이 사용되지 않도록 명시?
    // 타입스크립트는 일급함수의 반환타입에 크게 간여하지 않는다.
    // 콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있습니다.
    function actionFunction(n1, n2, cb) {
        const result = n1 + n2;
        cb(result);
        // return r;
        // 다음코드는 잘 리턴된다???
        // const r = cb(result);
        // return r;
    }
    function callR(n1) {
        console.log(n1 * 0.9);
        return n1 * 0.9;
    }
    const result = actionFunction(3, 5, callR);
    // undefined
    console.log('result', result);
}
// callback();
function basicUnknown() {
    // 기본적으로 any와는 다른타입이다.
    // unknown은 에러없이 모든 타입이 허용된다.
    let userInput;
    let name;
    userInput = 5;
    userInput = 'k';
    // error
    // unknown형식은 다른 타입에 할당할 수 없다.
    // 그러나 any는 상관없다.
    // any는 컴파일시 확인과정을 거치지 않는다.
    // name = userInput;
    /**
     * unknown형식은 any보다 좀더 제한적이다.
     * unknown은 현재 값의 타입을 확인하여야만 변수에 값을 할당 할 수 있다.
     * 타입스크립트는 타입을 체크하는지 유무로 타입을 확인하는지 감지한다.
     */
    // string -> 다른타입일 경우 error
    if (typeof userInput === 'string') {
        name = userInput;
    }
}
// basicUnknown();
function basicNever() {
    // never 타입은 절대 발생할 수 없는 타입을 나타낸다.
    // 항상 오류를 발생시키거나,
    // 아무것도 반환하지 않는다고 명시하는 경우 사용된다.
    function generateError(m, code) {
        throw { message: m, code };
    }
    // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
    function infiniteLoop() {
        while (true) { }
    }
    generateError('error!!!!!!', 501);
}
basicNever();
