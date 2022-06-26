function basiCcombine() {
  // 유니언 타입: 인자값으로 여러타입이 올수 있음.
  function combine(input1: string | number, input2: string | number) {
    // 타입스크립트 함수에서는 단지 여러종류의 타입을 허용하는거지
    // 정확히 어떤 타입으로 연산되는지는 알수 없음.
    // return input1 + input2;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
      return input1 + input2;
    } else {
      return input1.toString() + input2.toString();
    }
  }
  console.log(combine(1, 2));
  console.log(combine('h', 'i'));
}
// basiCcombine();

function literalType() {
  type Combinable = number | string;
  type WhatType = 'as-number' | 'as-string';
  // whatType은 특정목적을 위해 사용하는 리터럴타입이다.
  // 지정된 값만 허용한다.
  function combine(
    input1: string | number,
    input2: Combinable,
    whatType: WhatType,
  ) {
    // 타입스크립트 함수에서는 단지 여러종류의 타입을 허용하는거지
    // 정확히 어떤 타입으로 연산되는지는 알수 없음.
    // return input1 + input2;
    if (whatType === 'as-number') {
      return +input1 + +input2;
    } else {
      return input1.toString() + input2.toString();
    }
  }
  console.log(combine(1, 2, 'as-number'));
  console.log(combine('h', 'i', 'as-string'));
}
// literalType();

function simpleType() {
  type Person = {
    name: string;
    age: number;
  };
  const PersonObj: Person = {
    name: 'kwon',
    age: 21,
  };
  function printUser(info: Person) {
    console.log(info);
  }
  printUser({ name: 'kim', age: 21 });
}
// simpleType();
