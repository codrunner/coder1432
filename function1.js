function syMyName(){
    // console.log("r")  
    // console.log("a")
    // console.log("n")
    // console.log("j");

}
syMyName() // output => ranj
// add two number 
// function addNumber(num1,num2){
//     console.log(num1+num2);
// }
// addNumber(10,20);
function addNumber(num1,num2){
    // let result = num1+num2;
    //     return result
    return num1+num2;
    }
   const sum= addNumber(5,5);
   // console.log(sum); output=10\
   function loginUserMessage(username){
    if(!username ){ 
        console.log("please enter user name");
        return;
    }
    return `${username}`
   }
  console.log( loginUserMessage("ranjit kumar"));
  //jab koi value pass nahi karte hai to value undefined print hota 