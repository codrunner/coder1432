// Reduce +++++++++++=
const myNums=[1,2,3,4]
const myResult=myNums.reduce(function(acc,current){
    //console.log(`acc ${acc} and current ${current}`)
  return acc+current;
},0/*initial value o,1...*/)
//console.log(myResult); //out =>10

//second method using arrow function++++++++++++++
 const mysum=myNums.reduce((acc,curr)=>acc+curr,0);
 //console.log(mysum);

 const shopingCart=[
    {
        itemName:"javascript",
        price:999
    },
    {
        itemName:"python",
        price:2999
    },
    {
        itemName:"data science",
        price:3999
    },
 ]
 const priceTopay=shopingCart.reduce((acc,item)=>acc+item.price,0);
 console.log("Totle price = " +priceTopay);//oot=>7997