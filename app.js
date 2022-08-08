"use strict";
/**
 * 데코레이터는 클래스 선언과 멤버에 어노테이션과 메타-프로그래밍 구문을 추가할 수 있는 방법을 제공한다.
 * 데코레이터는 클래스 선언, 메서드, 접근자, 프로퍼티 또는 매개 변수에 첨부할 수 있는 특수한 종류의 선언입니다. 데코레이터는 @expression 형식을 사용합니다.
 * 여기서 expression은 데코레이팅 된 선언에 대한 정보와 함께 런타임에 호출되는 함수여야 합니다.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function basic() {
    function Logger(log) {
        console.log('Logger');
        return (constructor) => {
            console.log('return Logger');
            console.log(log);
            console.log(constructor);
            console.log('-----end-----');
        };
    }
    function withTemplate(template, hookId) {
        console.log('withTemplate');
        return (constructor) => {
            console.log('return withTemplate');
            const el = document.getElementById(hookId);
            const p = new constructor('kwon');
            if (el) {
                el.innerHTML = template;
                el.querySelector('p').textContent = p.name;
            }
        };
    }
    // 데코레이터를 통해 클래스를 호출하지 않아도 데코레이터 함수는 실행된다.
    const template = `<p>test</p>`;
    let Person = class Person {
        constructor(name) {
            this.desc = 'Person';
            this.name = name;
        }
    };
    Person = __decorate([
        Logger(),
        withTemplate(template, 'app')
    ], Person);
    // const kwon = new Person('kwon');
    // console.log(kwon);
}
// basic();
function decoratorosProperty() {
    class Product {
        constructor(t, p) {
            this.title = t;
            this._price = p;
        }
        set price(val) {
            if (val > 0)
                this._price = val;
            else
                throw new Error('val is eroor');
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
}
decoratorosProperty();
