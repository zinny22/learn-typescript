function Person3(name,age) {
  this.name = name;
  this.age = age;
}
var capt = new Person3('jin', 100)



class Person3{
  //클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다');
    this.name = name;
    this.age = age;
  }
}

let seho4 = new Person3('jin', 20);
console.log(seho4)