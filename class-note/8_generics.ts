// function logText<T>(text:T):T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');

-

// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join('')
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
//타입을 다르게 받기 위해서 중복적인 코드를 사용하는건 별로 좋지 않음 

function logText(text: string | number) {
  console.log(text);
  return text;
}

const a = logText('a');
a.split('')

// logText('하이');
// const num = logNumber(10);