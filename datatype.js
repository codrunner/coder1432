// primitive data type 
// 7 type:String,Number,Boolean,Null, undefined,symbol,BigInt

//reference(none primitive data type):array,objecct,function

// const id=symbol('123');
// const anotheId=symbol('123');
// console.log(id===anotherID);
// value will not be same.... 

//arrays
let arrays=["saktiman", "rathor","naagraj"];

//object
let myObj={
    name:"ranjit kumar",
    age:22,

}

//function..
let myFunction=function(){
    console.log("hello world");
}


// STACK(PRIMITIVE TYPE) Heap(non primitive type)
let stackValue="hello ranjit ";
let anotheName=stackValue
anotherName="md dilsad"
console.log(anotherName);
console.log(stackValue);
let userOne={
    email:"hallo@gmail.com",
    upi:"upi@1432",
}
let userTwo=userOne;
userTwo.email="rkp@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

//string..
const name="ranjit kumar";
const repocount=50;
 // console.log(name+repocount+"value");mis not good way to write..
console.log(`hello my name is ${name} and  my repocount${repocount}`);

const gameName=new String('codderram');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.chartAt(2));
// console.log(gameName.indexOf('t'));
const  newString= gameName.substring(0,4)
 console.log(newString);
 const anotherString=gameName.slice(-8,4);
 console.log(anotherString);
 const newStringOne="   ranjit  ";
 console.log(newStringOne);
 console.log(newStringOne.trim());
//replace method......
 const url="www//https//tranjit%100.com"
console.log( url.replace('%100','_'));
//output:www//https//tranjit_.com
console.log(url.includes("ranjit")); //puchne ke lia 
//split......
console.log(gameName.split('-'));
