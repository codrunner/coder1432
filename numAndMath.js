const balance=new Number(400);
console.log(balance);
console.log(balance.toString().length); // value ko string me karne ke lia 
// aap decimal kitne v number tak dikha sakte hai eg.400.00,400.000 etc
console.log(balance.toFixed(2));
//precision value ko apne mergi se roundup kar sakte hai
const otherNumber=123.5966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
//output => 1.2e+2
const hundreds=1000000;
console.log(hundreds.toLocaleString()); //us style 
//output => 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //indian value me
//output => 10,00,000

//++++++++++++ Math +++++++++++++
console.log("yah se maths ka concept hai");
console.log(Math); //output => object [math] {}
console.log(Math.abs(-4));//only convert -ve to +ve value

console.log(Math.round(4.75)+" your roundUp value"); //output  =>5
console.log(Math.ceil(4.2) +" your ceil value")// mtlb n=1,2,3,4.....vo bada hi choose karega(ceil=>bada)
console.log(Math.floor(4.9)+" your floor value") // vo hemesa value 4 hi dega. floor=>chota
 
console.log(Math.min(2,4,5,6,7,8)+" your min value");
console.log(Math.max(4,6,1,8,9)+" your max value");

console.log(Math.random()); //output => 0 to 1 value dega
console.log((Math.random()*10)+1+" unly 1 to 9 tak ki value"); //output => 1 to 9 value dega
console.log(Math.floor(Math.random()*10)+1+" roundUp value");// ye decimal ko round ko karke value dega
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min);//ye 1o to 20 tak floor value dega 