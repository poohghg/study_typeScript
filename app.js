"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function basic() {
    class Department {
        // 이중초기화 대신 생성자 함수의 인자값으로 접근자를 사용하면 초기화가 가능하다.
        constructor(name) {
            this.name = name;
            this.a = 1;
            // name: string;
            this.welcome = 'welcome';
            // 자바스크립트의 #보다 타입스트립트에서 제공하는 접근자를 이용하면 조금 더 사용하기 편하다.
            // protected:하위 클래스및 인스턴스에서 사용가능
            this.employees = [];
            this.name = name;
            this.welcome = Department.welcome;
        }
        // 타입스크립트는 매개변수로 this와 타입을 주면 this가 무엇으로 참조되어야 하는지 인지한다.
        describe() {
            return `${this.welcome} 부서명:${this.name}`;
        }
        noticeNumber(n) {
            if (isNaN(+n))
                return undefined;
            return +n;
        }
        addEmployee(employee) {
            // 유효섬검사를 위해 employees를 private로 변경
            // 웹의 안정성을 줄 수 있음.
            return this.employees.push(employee);
        }
        get getEmployees() {
            return this.employees;
        }
    }
    Department.welcome = 'department';
    const development = new Department('Development');
    console.log(development.describe());
    const describe = development.describe;
    // 타입스크립트에서는 this의 호출객체를 인지한다.
    // console.log(describe());
    development.addEmployee('kwon');
    development.addEmployee('hukc');
    console.log(development);
    console.log(development.getEmployees);
}
basic();
