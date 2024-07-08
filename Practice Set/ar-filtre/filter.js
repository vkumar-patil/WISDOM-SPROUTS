
//(3)remove duplicate use -indexof
// let array=[2,3,4,5,3,4,2,1,98];
// let removeDuplicate=array.filter((value,index)=> array.indexOf(value)==index);
// console.log(removeDuplicate);
// //price filter use method(max >=value)(min<=value)
// let filters=[100,2,500,700,9];
// let max=filters.filter(value=> value >=300);
// console.log(max);
// //otherwise this type
// var age = [19, 10, 33, 20, 5];
//     var v = age.filter(filt);
//     document.write(v + "<br>");
//       function filt(age) {
//         return age >= 15;
//       }
//   //(4).sort methad Ascending(return a-b)/Dscending(return b-a)
//   let compare=(a,b)=>{
//     return a-b;
//   }
//       let num = [9,9,3,7,1,15,90];
//      num.sort(compare);
//       console.log(num);
//       // (5)revers
//       let vijay=[1,2,3,4,5,7,6,8];
//     vijay.reverse();
//     console.log(vijay);
//         //no cheng orignal array use .concat().reverse()/[...arrayname].reverse() method.
//         let ajay=[1,2,3,4,5,7,6,8];
//        let res= [...ajay].reverse();
//         console.log(ajay);
//           console.log(res);
//           //string reverse
//           let str='i am a new lernner';
//          rel= str.split().reverse().join(' ');
//           console.log(rel);
//       //forech array function (value,item.index)
//       let vishal=[1,2,3,4,5,7,6,8];
//       vishal.forEach(consold);
//       function consold(value,index,array){
      
//         console.log('num['+value +']='+index);}
//         //sum useing forech
//         let rohan=[1,2,3,4,5,7,6,8];
//         let sum=0;
//         rohan.forEach(value=>{
//           sum+=value;
//           console.log(sum);
//         })
//         console.log(sum);
//         //(9)array maping
//         let number=[1,2,3,4,5,6,7,8];
//        let dubble= number.map(dubblemap);
//         function dubblemap(value,index,array){
// return value*2;
//         }console.log(number);
//         console.log(dubble);
//         let multy=[1,2,3,4,5,6,7,8];
//        let multy1= multy.map(multyind);
//         function multyind(value,index,array){
// return value*index;
//         }console.log(multy);
//         console.log(multy1);
//       //(10)filter even number finde
//         let filtere=[1,2,3,4,5,6,7,8];
//         even=filtere.filter(evene);
//         function evene(value){
//           return value%2==0;
//         }console.log(even);
//         //(7) array flatting
//        let vikas=[1,[2,[3,[4]]]];
//        let arr=vikas.flat(3);
//        console.log(arr)
//              let Arr =[20,30,40,50,60,70,80,90,];
//       let serching=Arr.findIndex(find);
//       function find(value){
//         return value==90;
//       }
//       console.log(serching);
//       //chunk 

// const arrayy =[1,2,3,4,,5,6,7,8,9];
// const chunksize=3;
// const newarray=[];
// function chunkArry(array,chunksize){
//   for(i=0;i<arrayy.length;i++){
//     for(j=0;j<=i;j++){
//       newarray.push(array[j]);
//     }
//   }array.slice(0,chunksize);

// }
// console.log("orignal array:",array);
// //flatning
// const aarr=[2[3[4[5]]]];
// let flat=aarr.flat(res);
// function reslt(){
// return aarr.flat();
// }

// //flat
// // function flattenarray1(arr){
// //   return arr.flat();
// // }
// // function flattenarray(arr){
// //   let flatArray=[];
// //   arr.forEach((element)=>{
// //     if(Array.isArray(element)){
// //       flattenar

// //     }else{
// //     flattenNewArray.push(element);

// //     }
// //   })
// //   return flattenNewArray;
// // }
// // const flattenarray=[1[2,3[4],5],6[7,8]];
// // console.log
// //.warn serching
// let arrr =[20,30,40,50,60,70,80,90,];
// index='30';
// function searchValue(arr,value){
//   index=arr.findIndex(ele=>ele===value)
//   if(index!==-1){
//     return index;
//   }else{
//     return 'value not found'
//   }
// }
// console.log(searchValue(arrr,'80'));


//    newArray2 = [2,4,6,8,10,12,14,16,18]
//   const newArray2 = array2.map((ele)=>ele*2);
//   console.log(newArray2)


//    let array3 =[2,5,8,10,11,12];
// //   intersection=[];
//   union=[];
//   different =[];

//   for (i=0;i<array2.length;i++){
//     if(array3.includes(array2[i])){
//       intersection.push(array2[i]);
//     }
//   }console.log(intersection);

//   array2.union(array3);

//   function shuffle(array) {
//     let currentIndex = array.length;
//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
// }

// // Example usage:
// let arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);
// let array=[2,3,4,5,6,];
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }console.log(j);
//   return array;
// }
// shuffleArray(array);

//SUMARRAY//
// const numArray=[2,3,4,5,6,];

// function sumArray(numArray){
//    let sum = 0;
//    numArray.forEach(element => {
      
//   sum += element });
//   console.log(sum);

// }sumArray(numArray);

//two sum//
// let num=[3,4,5,6,9,];
// target=15;
// function towsum(num,target){
// for(i=0;i<num.length;i++){
// for(j=i+1;j<num.length;j++){
//    if(num[i]+num[j]===target){
//      return [i,j];

//    }     

// }
// }
// return [];
// }
// console.log(towsum( num,target)) ; 
// const array=[2,3,4,5,6,7];
// for(i=0;i<array.length;i++){
//    console.log(array[i]);
// }
