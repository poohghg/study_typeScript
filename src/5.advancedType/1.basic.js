"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intersectionAndUnion = () => {
    function aboutMe(no) {
        return {
            name: 'kwon',
            nameArr: ['kwon'],
            date: new Date(),
        };
    }
    console.log(aboutMe(12));
    // 공통된 타입으로 결합할 수 도 있다.
    // 이는 유연성은 좋지만 런타임 시 어떤 타입을 얻게 될지 확신할 수 없다.
    const whatType = (s) => s;
    // string -> string
    whatType('s');
    // 에러
    // const add = (a: AA, b: AA) => a + b;
    // 타입가드를 통해 유니온타입의 유연성을 방어하는 코드를 짜야한다.
    const add = (a, b) => {
        if (typeof a === 'string' || typeof b === 'string')
            return a.toString() + b.toString();
        return a + b;
    };
    const printLog = (obj) => {
        console.log(obj.name);
        // 현재 타입이 어는것인지 확인하지 않고 사용하면 에러!!
        // console.log(obj.nameArr);
        //타입을 확인하는 방법들!!
        if ('nameArr' in obj)
            console.log(obj.nameArr);
        // if ((obj as A).nameArr) console.log(obj.nameArr);
    };
    // 클래스의 교차타입 확인
    class Car {
        drive() {
            console.log('dirve!!');
        }
    }
    class Truck {
        drive() {
            console.log('dirve!!');
        }
        loadCargo(amount) {
            console.log(`Truck lod ${amount}`);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useV(v, amount = 0) {
        v.drive();
        // if ('loadCargo' in v) v.loadCargo(amount);
        if (v instanceof Truck)
            v.loadCargo(amount);
    }
    useV(v1);
    useV(v2, 100);
    function moveObj(obj) {
        let speed = 0;
        switch (obj.type) {
            case 'q':
                speed = obj.flySpeed;
                break;
            case 'w':
                speed = obj.runSpeed;
                break;
            default:
                break;
        }
        return speed;
    }
    moveObj({ type: 'q', flySpeed: 50 });
    return undefined;
};
// intersectionAndUnion();
const typeCasting = () => {
    // 특정값이 특정 타입임을 알릴때 타입 캐스팅은 필수이다.
    // 특정 html의 엘레멘트 속성을 사용하기위해 형 변환은 필수이다.
    const input = document.querySelector('#input');
    // 이는 타입스크립트에 선택한 요소가 null이 아닌 html엘레멘트라고 알려야 한다.
    if (input)
        input.value = 'Dd';
    // !를 사용하여 널을 반환하지 않겠다고 타입스크립트에게 알리고 사용 할 수 있다.
    const pTag = document.getElementById('pTag');
    pTag.innerHTML = '안녕하세요';
    return undefined;
};
// typeCasting();
const flexbleIndex = () => {
    const error = {
        1: '1',
        2: '2',
    };
    console.log(error);
};
// flexbleIndex();
const etc = () => {
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string')
            return a.toString() + b.toString();
        return a + b;
    }
    // 타입 스크립트는 변환타입이 정확이 무엇인지 알지 못한다.
    // 타입스크립트는 AA타입이 숫자 또는 문자인지만 알고 있다.
    const result = add(1, '3333');
    console.log(result.split(' '));
    // console.log(result);
    // error
    // result.split(" ");
};
etc();
