const myArray1=[1,2,3,4,5,6]//mix of data type ho sakta hao
//const myAraay=[2,3,"ranjit",true]
//second method array definedd
const myArray2=new Array(1,3,5,6);
// console.log(myArray2);
// console.log(myArray2[3]+" ,i=3 position");//access value from arry

//array meethods
// console.log(myArray1);
// console.log(myArray2);
// myArray2.push(7);
// myArray1.pop();  //pop value from last
// console.log(myArray2+" after push");
// console.log(myArray1+" after pop");

// myArray1.unshift(9)
// console.log(myArray1);
//myArray1.shift();//isme kuch pass nahi karte hai
//console.log(myArray1); // output => shift remove the unshift element

// const newArr=myArray1.join();
// console.log(myArray1);
// console.log(typeof newArr); // value string me aayega

// +++++++++++ use of slice and splice +++++++++

// console.log("A",myArray1);
// const myn1=myArray1.slice(1,3)
// console.log(myn1);
//output =>[2,3]
// console.log("B",myArray1);

// const myn2=myArray1.splice(1,3);
// console.log(myn2);
//output =>[2,3,4]

//++++++ merrge array value ++++++

const marvel_heros=["thor","tony stark","loki"]
const dc_heros=["superman","iron man"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);//value access karne ke lia 3 position ka 1st element
//output => superman

// const allHeros=marvel_heros.concat(dc_heros);//concate
// console.log(allHeros);
//output =>[ 'thor', 'tony stark', 'loki', 'superman', 'iron man' ]

//without using concat and push method
// const all_new_Heros=[...marvel_heros,...dc_heros,];
// console.log(all_new_Heros);
// output => [ 'thor', 'tony stark', 'loki', 'superman', 'iron man' ]

// another method to merge array
console.log("convert into arry");
const another_array=[1,2,3,[6,6,7,8],9,[24,56,78,[90,78]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
// output => [
//    1, 2,  3,  6,  6,  7,
//    8, 9, 24, 56, 78, 90,
//   78
// ]

//+++++++++ convert into array +++++++
// Array.isArray("ranjit");
console.log(Array.isArray("ranjit"));//output =>false
console.log(Array.from("ranjit"));
// output => [ 'r', 'a', 'n', 'j', 'i', 't' ] convert in arry

console.log(Array.from({name:"ranjit"}))//intersting ,directly not convert ,you will hav to define
// output => [give empthy value ]

// other method
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3,)); //.form or of use kar sakte hai
//output =>[100,200,300] convert 