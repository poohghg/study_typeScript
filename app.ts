/**
 * 데코레이터는 클래스 선언과 멤버에 어노테이션과 메타-프로그래밍 구문을 추가할 수 있는 방법을 제공한다.
 * 데코레이터는 클래스 선언, 메서드, 접근자, 프로퍼티 또는 매개 변수에 첨부할 수 있는 특수한 종류의 선언입니다. 데코레이터는 @expression 형식을 사용합니다.
 * 여기서 expression은 데코레이팅 된 선언에 대한 정보와 함께 런타임에 호출되는 함수여야 합니다.
 */

function basic() {
  // 팩토리 패ㅔㅌ
  function Logger(log: String) {
    return (constructor: Function) => {
      console.log(log);
      console.log(constructor);
      console.log('-----end-----');
    };
  }

  // 데코레이터를 통해 클래스를 호출하지 않아도 데코레이터 함수는 실행된다.
  @Logger('LOGGING_PERSON')
  class Person {
    name: string;
    desc: string = 'Person';

    constructor(name: string) {
      this.name = name;
    }
  }

  const kwon = new Person('kwon');
  console.log(kwon);
}
basic();
