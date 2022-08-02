/**
 * 제네릭을 이용하면 데이터의 반환정보를 알수 있다.
 * T는 유저가 준 인수의 타입을 캡처하고 이 정보를 사용할 수 있다.
 */

function basic() {
  const names: Array<string> = [];
  const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });

  // function merge(objA: object, objB: object): object {
  //   // return Object.assign(objA, objb);
  //   return { ...objA, ...objb };
  // }

  const objA = { name: 'kwon' };
  const objB = { age: 31 };
  // const mergeObj = merge(objA, objB);
  // 이렇게 사용하면 타입스크립트가 실제 반환하는 오브젝트의 속성 정보를 알수 없음
  // object는 단지 객체를 나타낼뿐 어떤한 정보를 가지고 있는지 알려주지 않음.
  // mergeObj.name;

  // 제네릭을 사용하면 타입스크립트가 서로 다른 타입을 인지한다.
  // 이는 타입스크립트가 구체적인 타입의 정보를 알 수 있다.

  // T타입이 무엇이지 정의 할수 있다
  function merge<T extends object, U>(objA: T, objB: U) {
    // return Object.assign(objA, objb);
    return { ...objA, ...objB };
  }
  const mergeObj = merge(objA, objB);
  mergeObj.name;

  interface Lengthy {
    length: number;
  }
  function arrayTuple<T extends Lengthy>(arr: T) {
    const len = arr.length;
    return [arr, len];
  }

  console.log(arrayTuple('asd'));

  function arrayLen<T>(arr: T[]) {
    const len = arr.length;
    return [...arr, len];
  }

  const newArray = arrayLen(['3', '11']);
  console.log(newArray);
}

basic();
