//const tinderUser=new Object() //singletone object
//console.log(tinderUser); //output empthy {}
const tinderUser={}
//console.log(tinderUser); //not sinleton object give same output
tinderUser.Id="123abc"
tinderUser.name="ranjit kumar"
tinderUser.loginId=false
//console.log(tinderUser);
// output =>.{ Id: '123abc', name: 'ranjit kumar', loginId: false }
 const regularUser={
    email:"hallorkp@gmail.com",
    fulname:{
       userFulname:{// hume object ke under multiple object creaate kar sakte hai
         firstName:"ranjit",
         lastName:"kumar"
       }
    }
 }
 // access object 
 console.log(regularUser.fulname.userFulname.lastName);

 const obj1={1:"a",2:"b",3:"c"}
 const obj2={4:"a",5:"b",6:"c"}
 const obj3={7:"a",8:"b",9:"c"}
 //const obj4={obj1,obj2,obj3};// not valid ways
 //const obj4=Object.assign( {},obj1,obj2,obj3); //good of merg of object and {} is optional
 const obj4={...obj1,...obj2,...obj3}
 //console.log(obj4);

 // when data return from database 
 const user=[  // multiple value return from database
    {
        id:234,
        email:"ffrkkj@hhj"
    },
    {
        id:234,
        email:"ffrkkj@hhj"
    },
    {
        id:234,
        email:"ffrkkj@hhj"
    }
 ]
 // access value 
 user[1].email

 //now
 console.log(tinderUser);
 // output => { Id: '123abc', name: 'ranjit kumar', loginId: false } in terms of objects
 console.log(Object.keys(tinderUser));//object convert into array 
 //output => [ 'Id', 'name', 'loginId' ] keys interms array
 console.log(Object.values(tinderUser));
 //output => [ '123abc', 'ranjit kumar', false ]values  in terms of array
 //you can use loop and other ...etc 

 console.log(Object.entries(tinderUser));//  saparate the keys with value with arrays
 /* output =>  [ 'Id', '123abc' ],
  [ 'name', 'ranjit kumar' ],
  [ 'loginId', false ]
] */
console.log(tinderUser.hasOwnProperty('loginId')); // to chweck value exist in the object or not output give 'true or false'
// output => true