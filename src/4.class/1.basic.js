"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function basic() {
    // 추상 클래스는 다른 클래스들이 파생될 수 있는 기초 클래스이다. 직접 인스턴스를 생성하지는 못한다
    // 추상 클래스 상속하는 클래스는 반드스 super키워드롤 통해 상속받아야하며, 추상 메서드는 반드시 구현 되어야 한다.
    class Department {
        // 약식초기화
        // 이중초기화 대신 생성자 함수의 인자값으로 접근자를 사용하면 초기화가 가능하다.
        constructor(name, id) {
            this.name = name;
            this.id = id;
            // 자바스크립트의 #보다 타입스트립트에서 제공하는 접근자를 이용하면 조금 더 사용하기 편하다.
            // private: 해당 클래스에서만 사용가능하다. 클래스 외부에서는 접근이 불가능하다.
            // protected:해당 클래스,하위 클래스에서 사용가능, 즉 접근이 가능하다.
            // readonly: 읽기 전용 속성이다
            this.employees = [];
            this.name = name;
            this.id = id;
            this.welcomeMsg = `${Department.welcome} ${this.name}`;
        }
        // 타입스크립트는 매개변수로 this와 타입을 주면 this가 무엇으로 참조되어야 하는지 인지한다.
        describe() {
            return `${this.welcomeMsg} 부서명:${this.name}`;
        }
        addEmployee(employee) {
            return this.employees.push(employee);
        }
        get getEmployees() {
            return this.employees;
        }
    }
    Department.welcome = 'welcome';
    // const development = new Department('Development', 1);
    // console.log(development.describe());
    // const describe = development.describe;
    // 타입스크립트에서는 this의 호출객체를 인지한다.
    // console.log(describe());
    // development.addEmployee('kwon');
    // development.addEmployee('hukc');
    // console.log(development);
    // console.log(development.getEmployees);
    class ITDepartment extends Department {
        constructor(id, admins = []) {
            super(ITDepartment.DepartmentName, id);
            this.superAdmin = 'kwon';
            this.admins = ['kwon'];
            this.admins = this.admins.concat(admins);
        }
        printName() {
            console.log(`name:${this.name}`);
        }
        get adminsInfo() {
            return this.admins;
        }
        addAdmins(admin) {
            this.admins.push(admin);
        }
        // get과 set은 원시값만 할당가능?
        get superAdminInfo() {
            return this.superAdmin;
        }
        set superAdminInfo(admin) {
            this.superAdmin = admin;
        }
    }
    // static : 클래스 자체 변수를 선언할때 사용 인스턴스에서 접근 x
    ITDepartment.DepartmentName = 'ITD';
    const IT = new ITDepartment(1, ['a', 'b', 'c']);
    console.log(IT);
    IT.printName();
    // console.log(IT);
}
// basic();
