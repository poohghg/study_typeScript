"use strict";
function basicTypes() {
    function add(n1, n2) {
        return n1 + n2;
    }
    // 변수에 사용할 타입을 미리 지정하여 사용하는것도 좋은 방법이다.
    // 타입을 명시적으로 할당하였기 때문에 다음 변수는 타입을 추론 할 필요가 없다.
    let n1 = 5;
    const r = add(1, 51);
}
function basicObject() {
    const person = {
        name: 'kwon',
        age: 21,
    };
    console.log(person);
    // 자동으로 타입으 추론
    // person.age = '31';
}
function basicArray() {
    const person = {
        name: 'kwon',
        age: 31,
        hobbies: ['s', 'c'],
    };
    let numArr = [];
    // 해당 형식이 아니면 에러!!
    // numArr = 1;
    // numArr.push('s');
    numArr.push(333);
    console.log(numArr);
    // 제네릭 방식으로도 선언가능
    let stringArr = [];
    stringArr.push('a');
}
function tuple() {
    // 튜플은 자바스크립트 자체에서는 지원하지 않음
    // 길이와 타입이 고정된 배열
    let arr;
    arr = [1, 'q'];
    // error 배열의 길이를 벗어남
    // arr[2] = 'ss';
    // 형식에 맞지않음.
    // arr[0] = 'ss';
    // 타입스크립트의 에러...
    arr.push('1111');
    // 하지만 재접근시 에러
    // arr[2] = 111;
    console.log(arr);
}
function basicEnum() {
    // JavaScript의 표준 자료형 집합과 사용하면 도움이 될만한 데이터 형은 enum입니다.
    // C# 같은 언어처럼, enum은 값의 집합에 더 나은 이름을 붙여줄 수 있습니다.
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    const red = Color.Green;
    console.log(red);
    // 이넘은 인덱스로도 접근가능하다.
    // -> Blue
    console.log(Color[2]);
    // 인덱스를 따로 설정할수 도 있다.
    let Rgb;
    (function (Rgb) {
        Rgb[Rgb["r"] = 1] = "r";
        Rgb[Rgb["g"] = 2] = "g";
        Rgb[Rgb["B"] = 3] = "B";
    })(Rgb || (Rgb = {}));
    console.log(Rgb[1]);
    let Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
    })(Role || (Role = {}));
    const userTy = Role.ADMIN;
    // console.log(Role);
    // console.log(userTy);
    if (Role.ADMIN === userTy)
        console.log('admin...');
}
// basicEnum();
function basicAny() {
    // 단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 있다.
    // 개발시 타입추론이 어렵거나, 동적으로 타입이 정해지는 경우 사용
    // 혼합된 배열
    let array = [1, 'a', true];
    // 값의 타입을 변경가능
    let variable = true;
    variable = 1;
    console.log(variable);
    //  남발하면 타입스크립트의 장점을 잃을수 있다.
}
