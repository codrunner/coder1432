function calculateCartPrice(...num1){  // ...num1 is called rest or spred
    return num1
}
//console.log(calculateCartPrice(10,20,30,50));
//output =>[10,20,30,50]
function calculateCartPrice2(val,val2,...num2){  // ...num1 is called rest or spred
    return num2
}
console.log(calculateCartPrice2(10,20,30,50));// val1,val2 only rest element print hoga 


// object pass in function +++++++++++++
const user={
    username:" ranjit ",
    price:" 999"
}
function handleObject(user){// argument me kuch name rakh sakte hai
 console.log(`username is${user.username}, and price${user.price}`);

}
//handleObject(user); or
handleObject({
    username:"radha",
    price:"9999"
}) // output = >username isradha, and price9999

// arays pass in function ++++++++++

const myNewArrays=  [200,300,44,667]
function returnArray(getArray){
  return getArray[1]
}
// console.log(returnArray(myNewArrays));
console.log(returnArray([200,300,44,667]));
//output => [1]=300,[2]=44..