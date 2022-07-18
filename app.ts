export {};
// https://typescript-kr.github.io/pages/interfaces.html
// https://ui.toast.com/weekly-pick/ko_20210521
/**
 * 인터페이스 객체의 구조와 타입을 설명한다.
 * 이는 사용자 정의 타입을 명시할수 있고 선택적으로 타입을 선택할 수도 있다.
 * 또한 공통 객체에서의 재사용도 가능하다.
 * 인터페이스는 주로 구체적인 구현이 아닌 서로 다른 클래스 간의 기능을 공유하기 위해 사용된다.
 * 인터페이스를 확인함으써 객체가 가져야하는 기본 구조를 알 수 있다.
 * 인터페이스는 자바스크립트로 변환되지 않는다, 단지 개발 및 컴파일 도중 타입스크립트 전용으로 사용 할 수 있다.
 * 인터페이스는 상속 및 확징이 가능하다.
 * 인터페이스의 경우 선언적 확장이 가능하다.
 * 인터페이스는 객체에세만 사용이 가능 반면 type은 아님.
 */

function basic() {
  interface Named {
    readonly name: string;
    // 선택적 매개변수이다 인터페이스로 구현되는 객체에 반드시 필요하지는 않다.
    result?: string | undefined;
  }
  // 기본적으로 인터페이스는 초기값을 설정할 수 없다
  // 인터페이스의 경우 여러 인터페이스로 부터 상속 받을 수 있다.
  interface Person extends Named {
    age: number;
    plusAge(): number;
    // plusAge: () => number;
  }

  // 같은 이름으로 확장이 가능하다.
  interface Person {
    gender?: string;
  }

  const kwon: Person = {
    name: 'kwon',
    age: 31,
    plusAge() {
      return this.age + 1;
    },
    result: 'hmm..',
    gender: 'M',
  };

  class User implements Person {
    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }
    plusAge(): number {
      return this.age + 1;
    }
  }

  //인스턴스가 어떠한 형태로 구성되어 있는지 확인할 수 있다.
  const user1: Person = new User('k', 21);
}

function fn() {
  type AddFn = (a: number, b: number) => number;
  const add: AddFn = (n1, n2) => n1 + n2;
  const r = add(1, 1);
  // 인터페이스로 바꾸기

  interface AddNum {
    (a: number, b: number, helpNum?: number): number;
  }
  // 함수 세팅시 선택적 매개변수를 사용 할 수 있음
  // 초기값 세팅을 굳이 안해줘도됨
  // 대신 체크로직은 있어야함
  const addFn: AddNum = (num1, num2, helpNum?) => {
    let r = num1 + num2;
    if (helpNum) return r + helpNum;
    return r;
  };

  console.log(addFn(1, 2, 3));
  console.log(addFn(1, 2));

  // addFn();
}

fn();
// basic();
