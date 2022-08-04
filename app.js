"use strict";
/**
 * 제네릭을 이용하면 데이터의 반환정보를 알수 있다.
 * T는 유저가 준 인수의 타입을 캡처하고 이 정보를 사용할 수 있다.
 */
function basic() {
    const names = [];
    const promise = new Promise((resolve, reject) => {
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
    function merge(objA, objB) {
        // return Object.assign(objA, objb);
        return Object.assign(Object.assign({}, objA), objB);
    }
    const mergeObj = merge(objA, objB);
    mergeObj.name;
    function arrayTuple(arr) {
        const len = arr.length;
        return [arr, len];
    }
    console.log(arrayTuple('asd'));
    function arrayLen(arr) {
        const len = arr.length;
        return [...arr, len];
    }
    const newArray = arrayLen([3, '11']);
    console.log(newArray);
}
// basic();
function keyOf() {
    function extractValue(obj, key) {
        return obj[key];
    }
    extractValue({ name: 'kwon' }, 'name');
}
// keyOf();
function testClass() {
    class DataStorage {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
        removeItem(item) {
            const index = this.data.indexOf(item);
            if (index === -1)
                return;
            this.data.splice(index, 1);
        }
        getItems() {
            return [...this.data];
        }
    }
    // 제네릭을 사용시 기본적으로 타이스크립트가 타입을 추론한다.
    // 물론 타입을 명시할수 도 있음
    const data = new DataStorage();
    data.addItem(1);
    data.addItem(2);
    data.addItem(3);
    data.addItem(4);
    data.addItem(5);
    data.removeItem(6);
    // data.removeItem(3);
    // data.addItem(5);
    console.log(data.getItems());
    const sDatas = new DataStorage();
    // sDatas.addItem(1);
    console.log(sDatas.getItems());
    const obj1 = { name: 'kwon' };
    // const objDatas = new DataStorage<object>();
    // objDatas.addItem(obj1);
    // objDatas.removeItem(obj1);
}
// testClass();
function utility() {
    // 파셜타입은 우리가 만든 타입의 속성이 선택적으로 사용될수 있다는것을 명시?
    const goal = {};
    goal.title = 'title';
    goal.desc = 'its title';
    goal.completData = new Date();
    console.log(goal);
    // 오직 읽기만 가능한 배열이다.
    const ages = [1, 2, 3, 4, 5];
    // ages.push([1]);
    // ages.
    console.log(ages);
    // const obj: Readonly<Goal> = {};
}
// utility();
