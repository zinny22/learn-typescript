//숫자형 이넘은 아무것도 정의하지 않으면 0부터 +1 된다
enum Shoes{
  Nike,
  Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes)//0

//문자형이넘
enum Shoes1{
  Nike = '나이키',
  Adidas='아디다스'
}

let myShoes1 = Shoes.Nike;
console.log(myShoes)//나이키

//예제
enum Answer{
  Yes = 'Y',
  No ='N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('correct')
  }
  if (answer = Answer.No) {
    console.log('false')
  }
}

askQuestion(Answer.Yes);
// askQuestion('yse')//이런건안됨(이넘에서 제공되는 값만 넘길수 있음)