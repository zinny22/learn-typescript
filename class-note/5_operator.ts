//유니온 타입
function logMessage(value: string | number | boolean) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'boolean') {
    value.valueOf();
  }
  throw new TypeError('value must be string or number')
}
logMessage('hello');
logMessage(100)
logMessage(false)

interface Developer{
  name: string;
  skill: string;
}

interface Person1{
  name: string;
  age: number;
}

//유니온타입
function askSomeone(someone: Developer | Person1) {
  //공동속성만 가능 
  someone.name
}

askSomeone({ name: "jini", skill: 'hi' });
askSomeone({ name: 'jin', age: 100 });


//인터섹션타입 
function askSomeone2(someone: Developer & Person1) {
  //모든 속성 다가능  
  someone.name
  someone.age
  someone.skill
}

askSomeone2({ name: 'jin', skill: 'hi', age: 30 });