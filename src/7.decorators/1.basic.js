"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 데코레이터는 클래스 선언과 멤버에 어노테이션과 메타-프로그래밍 구문을 추가할 수 있는 방법을 제공한다.
 * 데코레이터가 붙은 클래스,메서드,변수 등에 데코레이터가 정의된 기능이 동작된다.
 * 데코레이터는 클래스 선언, 메서드, 접근자, 프로퍼티 또는 매개 변수에 첨부할 수 있는 특수한 종류의 선언입니다.
 * 데코레이터는 @expression 형식을 사용합니다.
 * 여기서 expression은 데코레이팅 된 선언에 대한 정보와 함께 런타임에 호출되는 함수여야 합니다.
 */
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
    // 팩토리 형태를 사용함로써 원하는 인자값을 받아 올 수 있다.
    function withTemplate(template, hookId) {
        console.log('withTemplate');
        return function (originalConstructor) {
            return class extends originalConstructor {
                constructor(...args) {
                    super();
                    console.log('Rendering templet');
                    const el = document.getElementById(hookId);
                    if (el) {
                        el.innerHTML = template;
                        el.querySelector('p').textContent = this.name;
                    }
                }
            };
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
basic();
function decoratorosProperty() {
    function Log(target, propertyName) {
        console.log('target', target);
        console.log('propertyName', propertyName);
    }
    function Log2(target, name, desc) {
        console.log('접근자 프로퍼티');
        console.log('target', target);
        console.log('name', name);
        console.log('desc', desc);
        return {};
    }
    function Log3(target, name, desc) {
        console.log('메서드 프로퍼티');
        console.log('target', target);
        console.log('name', name);
        console.log('desc', desc);
    }
    function Log4(target, name, position) {
        console.log('파라메터 프로퍼티');
        console.log('target', target);
        console.log('name', name);
        console.log('position', position);
    }
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
    __decorate([
        Log
    ], Product.prototype, "_price", void 0);
    __decorate([
        Log2
    ], Product.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax", null);
}
// decoratorosProperty();
