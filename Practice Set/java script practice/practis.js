// let w = 10;
// for (a = 1; a <= w; a++) {
//   for (b = 1; b <= a; b++) {
//     document.write("*");
//   }
//   document.write("</br>");
// }
// let x = 10;
// let snd = "";
// for (C = x; C >= 1; C--) {
//   for (d = 1; d <= x - C; d++) {
//     snd += " ";
//     document.write(" ");
//   }
//   document.write("</br>");
//   for (e = 1; e <= C; e++) {
//     document.write("*");
//   }
// }
// //2nd asin
// function findlength(str){
//     console.log(str.length);
// }
// findlength("vijay");
// //3
//  function findindex(str,index){
//     console.log( str.charAt(index));

//  }findindex('vijay','4');
//  //4

// //  Str = 'madam';
// //  console.log();
// // Arr = Str.split('')
// // Arr.reverse();
// // Str2 = Arr.join('')
// // console.log(Str2);
// Str='madam';
// function checkpallindrom(Str){
//     Arr = Str.split('');
//     Arr.reverse('');
//     Str2 = Arr.join('');

//      if(Str === Str2){
//         return  'pallindrom'
//     }
//     else{ return 'notpallindrom'}
// console.log(Str2);

// }checkpallindrom('madam');
//simple function
// function greeting() {
//   console.log("hello" + " vijay");
// }
// greeting();

//with date function
// function greeting1(name) {
//   console.log("hello " + name);
// }
// greeting1("vijay");
// find odd even
// function findoddEven(n) {
//   if (n % 2 == 0) {
    // console.log("it is even no");
//     return "even";
//   } else {
//     // console.log('it is odd no');
//     return "odd";
//   }
// }
// vijay = findoddEven(50);
// console.log(vijay);
// document.write(vijay);
// document.write("</br>");

// simpleArrowFunction = (val) => {
//   if (val % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// sst = simpleArrowFunction("40");
// document.write(sst);

// detail = (name1, age) => {
//   console.log("your name is " + name1 + "your age is " + 26);
// };
// detail("vijay ", 26);

// ARROWFUNCTION = (X) => {
//   if (X % 2 == 0) {
//     console.log("e");
//   } else {
//     console.log("o");
//   }
// };
// ARROWFUNCTION(67);
// const name = "vijay";
// const age = 26;

// datalist = `hello! , my name is ${name}.and may age ${age}.`;
// console.log(datalist);

// let str = "vijy";

// vijay = [(a = 1), (b = 2), (c = 3)];
// vijay[0] = 9;
// console.log(vijay);

// const s = "aabaa";
// function partition(s) {
//   function isPalindrome(sub) {
//     return sub === sub.split("").reverse().join("");
//   }

//   function backtrack(start, path) {
//     if (start === s.length) {
//       result.push([...path]);
//       return;
//     }
//     for (let end = start + 1; end <= s.length; end++) {
//       const sub = s.substring(start, end);
//       if (isPalindrome(sub)) {
//         path.push(sub);
//         backtrack(end, path);
//         path.pop();
//       }
//     }
//   }

//   const result = [];
//   backtrack(0, []);
//   return result;
// }
// console.log(partition(s));

let arr = [1, 2, 3, 4, 6, 7, 8];
for (let i = 1; i <= arr.length + 1; i++) {
  if (arr.indexOf(i) === -1) {
    console.log(i);
    break;
  }
}
