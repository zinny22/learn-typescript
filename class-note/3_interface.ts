interface User{
  age: number;
  name: string;
}

//변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name:'jin'
}

//함수에 인터페이스 활용
function getUser(user:User) {
  console.log(user)
}
const capt = {
  name: 'jin',
  age:100
}
getUser(capt)

//함수의 스팩(구조)에 인터페이스를 활용
interface Sumfunction{
  (a:number, b:number):number
}
var sum4: Sumfunction;
sum4 = function (a:number, b:number):number {
  return a + b;
}

//인덱싱
interface StringArray{
  [index:number]: string
}

var arr5:StringArray = ['a', 'b', 'c'];
arr5[0] ='10'