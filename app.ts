export {};
// https://typescript-kr.github.io/pages/interfaces.html
// https://ui.toast.com/weekly-pick/ko_20210521
/**
 * 인터페이스 객체의 구조와 타입을 설명한다.
 * 이는 사용자 정의 타입을 명시할수 있고 선택적으로 타입을 선택할 수도 있다.
 * 또한 공통 객체에서의 재사용도 가능하다.
 * 인터페이스는 주로 구체적인 구현이 아닌 서로 다른 클래스 간의 기능을 공유하기 위해 사용된다.
 * 인터페이스를 확인함으써 객체가 가져야하는 기본 구조를 알 수 있다.
 */

function basic() {
  // 인터페이스는 초기값을 설정할 수 없다
  interface Person {
    name: string;
    age: number;
    plusAge(): number;
    // plusAge: () => number;
  }
  const kwon: Person = {
    name: 'kwon',
    age: 31,
    plusAge() {
      return this.age + 1;
    },
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

  const user1: Person = new User('k', 21);
}

basic();
