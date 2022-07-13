function singleton() {
  /**
   * 싱글톤 패턴 : 특정 클래스의 인스턴스를 하나만 가지고 있다
   * 이는 정적 메소드나 속성을 사용할 수 없으며, 동시에 사용하지 않고자 하는 것이다.
   * 클래스를 기반으로 하데 정확히 하나의 인스턴스만을 사용한다.
   * 장점
   * 메모리 측면에서 하나의 인스턴스만 사용한다.
   * 데이터 공유가 쉽다.
   * 인스턴스가 하나만 존재한다는 것을 보증하고 싶을때 사용한다.
   * 단점
   * 코드 자체가 많다.
   * 유연성이 부족하다.
   * 테스트 하기 어렵다
   */
  class Auth {
    // 클래스내 변수에 클래스 인스턴스를 할당한다.
    private static instance: Auth;
    public userCd: number = 1;
    //  생성자 함수에 private을 생성하여 객체생성을 클래스 내부에서 한번만 한다.
    private constructor() {}
    static getInstance() {
      if (Auth.instance) return this.instance;
      this.instance = new Auth();
      return this.instance;
    }

    // get userCdInfo() {
    //   return this.userCd;
    // }
    // set userCdInfo(userCd: number) {
    //   this.userCd = userCd;
    // }
  }

  const a = Auth.getInstance();
  const b = Auth.getInstance();
  a.userCd = 3;
  console.log(a);
  console.log(b);
}
