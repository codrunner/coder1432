//singleton 
//object literals
const mySym=Symbol("key1");
const jsUser={// second method object.create
   name:"ranjit kumar",
   age: 18,
   location:"jaipur",
   email:"hallo@gmail.com",
   isLoggedIn:false,
   lastLohinDays:["monday","sunday"],//arrays v likh sakte hai
   "city":"raipur",// aise v likh sakte hai
   [mySym]:"myKey1", // aise v use kar sakta hai

}
//console.log(jsUser.email); // first method
//console.log(jsUser["email"]); // yaha pe email ko ""me likgna hoga kyoki object use string ke tarah treat karta hai
//console.log(jsUser["city"]);
//console.log(jsUser[mySym]);
//jsUser.email="rkp@gmail.com"; // yaha change hog kyoki ye freeze hone se pahle change hua hai
//Object.freeze(jsUser)//value ko freeze mtlb koi change nahi hoga
//console.log(jsUser);
//jsUser.email="pk@gmail.com" // ye change nahi hoga kyoki freeze ho chuka hai email
//console.log(jsUser.email)

jsUser.greeting=function(){ // 'this' method use foe access value from object
    console.log(`hello dear,${this.name}`);
}
console.log(jsUser.greeting());