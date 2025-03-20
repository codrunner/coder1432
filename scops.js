// scops 
let a=400;
if(true){ // under{is called block scop}
    let a=20
    const b=30
    var c=50
    console.log("innera",a)
}
console.log(a);
//console.log(b);
//console.log(c);

// scops in arrays++++++++++
if (true){
    const userName="hitesh"
    if(userName==="hitesh"){
      const website=" youtub"
      console.log(userName+website);
    }
    //console.log(website);//scops se bahar
}
//console.log(userName);  scop se bahar hai

//+++++++++++++ intresting +++++++++=
console.log(addOne(5)); //is case me yaha print hoga 
 function addOne(num1){
   return num1+2; 
 }
//  console.log(addOne(5));
//likhne ka dusra metho
//console.log(addTwo(10));// yaha kam nahi karega 
const addTwo=function(num2){
   return num2+1
}
console.log(addTwo(10)); // yaha print ho jayega