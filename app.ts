/**
 * 데코레이터는 클래스 선언과 멤버에 어노테이션과 메타-프로그래밍 구문을 추가할 수 있는 방법을 제공한다.
 * 데코레이터가 붙은 클래스,메서드,변수 등에 데코레이터가 정의된 기능이 동작된다.
 * 데코레이터는 클래스 선언, 메서드, 접근자, 프로퍼티 또는 매개 변수에 첨부할 수 있는 특수한 종류의 선언입니다.
 * 데코레이터는 @expression 형식을 사용합니다.
 * 여기서 expression은 데코레이팅 된 선언에 대한 정보와 함께 런타임에 호출되는 함수여야 합니다.
 */

function basic() {
  function Logger(log?: String) {
    console.log('Logger');
    return (constructor: Function) => {
      console.log('return Logger');
      console.log(log);
      console.log(constructor);
      console.log('-----end-----');
    };
  }

  // 팩토리 형태를 사용함로써 원하는 인자값을 받아 올 수 있다.
  function withTemplate(template: string, hookId: string) {
    console.log('withTemplate');
    return function <T extends { new (...args: any[]): { name: string } }>(
      originalConstructor: T,
    ) {
      return class extends originalConstructor {
        constructor(...args: any[]) {
          super();
          console.log('Rendering templet');
          const el = document.getElementById(hookId);
          if (el) {
            el.innerHTML = template;
            el.querySelector('p')!.textContent = this.name;
          }
        }
      };
    };
  }

  // 데코레이터를 통해 클래스를 호출하지 않아도 데코레이터 함수는 실행된다.
  const template = `<p>test</p>`;
  @Logger()
  @withTemplate(template, 'app')
  class Person {
    name: string;
    desc: string = 'Person';

    constructor(name: string) {
      this.name = name;
    }
  }
  // const kwon = new Person('kwon');
  // console.log(kwon);
}
basic();
function decoratorosProperty() {
  function Log(target: any, propertyName: string) {
    console.log('target', target);
    console.log('propertyName', propertyName);
  }

  function Log2(
    target: any,
    name: string,
    desc: PropertyDescriptor,
  ): PropertyDescriptor {
    console.log('접근자 프로퍼티');
    console.log('target', target);
    console.log('name', name);
    console.log('desc', desc);
    return {};
  }

  function Log3(target: any, name: string | Symbol, desc: PropertyDescriptor) {
    console.log('메서드 프로퍼티');
    console.log('target', target);
    console.log('name', name);
    console.log('desc', desc);
  }

  function Log4(target: any, name: string | Symbol, position: number) {
    console.log('파라메터 프로퍼티');
    console.log('target', target);
    console.log('name', name);
    console.log('position', position);
  }

  class Product {
    // 클래스를 정의했을때 클래스의 일부로 실행된다.
    title: string;
    @Log
    _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) this._price = val;
      else throw new Error('val is eroor');
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }
}
// decoratorosProperty();
