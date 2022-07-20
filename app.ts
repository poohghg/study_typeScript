const intersection = () => {
  /**
   * 교차타입
   * 교차타입은 여러타입을 하나로 결합한다.
   */
  type A = {
    // no: string;
    name: string;
    nameArr: string[];
  };
  type B = {
    // no: number;
    name: string;
    date: Date | number;
  };
  // 유니언 타입
  type C = A & B;

  function aboutMe(no: number): C {
    return {
      name: 'kwon',
      nameArr: ['kwon'],
      date: new Date(),
    };
  }
  console.log(aboutMe(12));

  type AA = string | number;
  type BB = string | undefined;
  type CC = AA & BB;
  // 공통된 타입으로 결합할 수 도 있다.
  // 이는 유연성은 좋지만 런타임 시 어떤 타입을 얻게 될지 확신할 수 없다.
  const whatType = (s: CC): CC => s;
  // string -> string
  whatType('s');

  // 에러
  // const add = (a: AA, b: AA) => a + b;
  // 타입가드를 통해 유니온타입의 유연성을 방어하는 코드를 짜야한다.
  const add = (a: AA, b: AA): AA => {
    if (typeof a === 'string' || typeof b === 'string')
      return a.toString() + b.toString();
    return a + b;
  };

  // A,B 타입의 교차타입 생성
  type D = A | B;
  const printLog = (obj: D): void => {
    console.log(obj.name);
    // 현재 타입이 어는것인지 확인하지 않고 사용하면 에러!!
    // console.log(obj.nameArr);
    //타입을 확인하는 방법들!!
    if ('nameArr' in obj) console.log(obj.nameArr);
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
    loadCargo(amount: number) {
      console.log(`Truck lod ${amount}`);
    }
  }

  type V = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useV(v: V, amount: number = 0) {
    v.drive();
    // if ('loadCargo' in v) v.loadCargo(amount);
    if (v instanceof Truck) v.loadCargo(amount);
  }

  useV(v1);
  useV(v2, 100);
  // useV();

  return undefined;
};

intersection();
