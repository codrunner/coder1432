// const price=1000;
// if(price<600){
//     console.log("less than 600");
// } else if(price<750){
//     console.log("less than 750");
// } else if(price<200){
//     console.log("less than 200");

// } else {
//     console.log("not exist price");
// }

// real life example ++++++++++
//   const userLoggedIn=true
//   const debitCard=true
//   const loggedInfromGoogle=false
//   const loggedInfromEmail=true
//   if(userLoggedIn && debitCard){
//     console.log("Allow to bue course");
//   }
//   if(loggedInfromGoogle || loggedInfromEmail){
//     console.log("user logged in");
//   }

  // +++++++++ switch ++++++++
   // basick syantax
    // switch(key){
    //     case value:
    //         break;
    //         default:
    //             break;
    // }

    // const month=3
    //  switch(month){
    //     case 1:
    //         console.log("january");
    //         break;
    //         default:
                
    //             case 2:
    //                 console.log("february");
    //                 break;
    //             case 3:
    //                 console.log("march");
    //                 break;
    //             break;
    // }

    //+++++++++++++ truthy and falsy value+++++++++++++

    const userEmail= []  // ""  // => dont have user email , got  user email=>//[]//{}//"ranjit@gmail.com"
    if(userEmail){
        console.log("got user email");
    } else {
        console.log("dont have user email");
    }

    //falsy values +++++
    //false ,0, -0, bigInt , "" ,null , undefined ,NaN(not an number)

    //truthy values ++++++++++++++++++
    //"0" ,'false', " ", [] , {} ,function(){}

    // if(userEmail==0){
    //     console.log("array is empathy");
    //     //output array is empathy

    // }

    // const empthyObject={}
    // if(Object.keys(empthyObject).lenght===0){
    //     console.log("empathy object");
    // }
    //false==0 =>true
    //false=='' => true
    //0=='' =>true

    // nullish coalescing (??):null , undefined ++++++++++

    let valu1;
    //valu1=5 ?? 10 //output =>5
      //valu1=null ?? 10 //output =>10
      //valu1=undefined ??15//output=>15
    // null and undefined hamesh uske bad wale value lenge 
    //console.log(valu1); 

    // +++++++++ternary operator+++++++++++++++++++++
     const iceteaPrice=100
     iceteaPrice <= 80 ? console.log("less than 80"):console.log("greater than 80");
     //output => less than 80
