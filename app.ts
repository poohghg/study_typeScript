function basicTypes() {
  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  // 변수에 사용할 타입을 미리 지정하여 사용하는것도 좋은 방법이다.
  // 타입을 명시적으로 할당하였기 때문에 다음 변수는 타입을 추론 할 필요가 없다.
  let n1: number = 5;
  const r = add(1, 51);
}

function basicObject() {
  const person: {
    name: string;
    age: number;
  } = {
    name: 'kwon',
    age: 21,
  };
  console.log(person);
  // 자동으로 타입으 추론
  // person.age = '31';
}

function basicArray() {
  const person: {
    name: string;
    age: number;
    hobbies: string[];
  } = {
    name: 'kwon',
    age: 31,
    hobbies: ['s', 'c'],
  };

  let numArr: number[] = [];
  // 해당 형식이 아니면 에러!!
  // numArr = 1;
  // numArr.push('s');
  numArr.push(333);
  console.log(numArr);
}

basicArray();
