// const user ={
//     username:"ranjit" ,
//     price:999,
    
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);  
//         console.log(this) 
//        }
//     }

//     user.welcomeMessage();
//     user.username="ankit"
//+++++++++++++ arrowfunction ++++++++++

    const chai=( )=>{  //arrow function
        let username="ranjt"
        console.log(this)
    }
    chai() // output {empathy}

    const addNumber=(num1, num2) =>{
    return num1+num2
    }
    console.log(addNumber(5,7)); //output=>12

    //+++++++++implicite function in one line
    const addTwo=(num1,num2)=> num1+num2
    //const addTwo=(num1,num2)=> (num1+num2) //Aise v likh sakte hai
    // agar aap carly bracket use ko to return likhna padega  
    console.log(addTwo(9,6)); //OUTPUT =>15

    //if yow wanna return object to appno({do something}) likhna padega 

    //++++++ieadiately invoked function expression(IIFE)++++

    (function chai(){
        console.log(`db connect`);
    })();
    (()=>{
   console.log(`db is not connet`);
    })();
    
    ((name)=>{
        console.log(`db is not connet${name}`);
         })(' ranjit kumar');