//+++++++++ for loop +++++++++++++

// let myArray=["ranjit","dilasd","tomy","kutta"];
// for(let i=0;i<myArray.length;i++){
//     const element=myArray[i];
//     console.log(element);
// }

// +++++++++while loopt+++++++++

let myArray=[" ranjit"," dilsad"," sperman"]
let arr=0;
while(arr<myArray.length){
   // console.log(`value is${myArray[arr]}`);
    arr=arr+1;
}

//++++++++++ do while ++++++
let score=11 // 11 => output score  11
do{
    //console.log(`score is ${score}`);
    score++

} while(score<=10);

//+++++++++ forof +++++++++++++=
 //[{},{},{}]
 //syantax  for (const element of object) {}
    
 


 const array =[1,2,3,4,5]
 for (const num of array) {
 //console.log(num);    // out=>1,2,3,4,5
 }

const greating="ranjit";
for (const great of greating) {
    //console.log(`hello ${great}`);
    
}

//++++++ maps ++++++++++++++ is object  and unique value cheak in mdn
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"united state of america")
map.set('FR',"france")
map.set('INL',"england")
map.set('IN',"INDIA")// repeated value not consider
// console.log(map);
 /* out => Map(4) {
  'IN' => 'INDIA',
  'USA' => 'united state of america',
  'FR' => 'france',
  'INL' => 'england'
} */

  // using for loop print map
  for (const key of map) {
  //  console.log(key);
    /*out => [ 'IN', 'INDIA' ]
             [ 'USA', 'united state of america' ]
             [ 'FR', 'france' ]
             [ 'INL', 'england' ] both value eksath printh= hp gaya */
    
  }
  for (const [key,value] of map) {
   // console.log(key ,":-",value)
    /*out => IN :- INDIA
             USA :- united state of america
             FR :- france
             INL :- england */
  }
   //++++++ forof in object +++++++++
//   const myObject={
//     game:'NFS',
//     game2:'spiderman'
//   }
//   for (const [key,value] of myObject) { 
//     console.log(key,':-',value)
//   }
// give error myObject is not iterable

//+++++++++++++= forin loop in object ++++++++++++++++
 const myObject={
    js:' javascript',
    cpp:' c++',
    rb:' ruby',
    swift:" swift by apple"

 }
 for (const key in myObject ) {
   // console.log(`${key} for shortcut${myObject[key]}`);
   /*out => js for shortcut javascript
            cpp for shortcut c++
            rb for shortcut ruby
            swift for shortcut swift by apple  */
 }
   //++++++ forin in array +++++++++++ 
 const Programming=["js","rb","py","java","cpp"] 
 for (const key in Programming) {
    //console.log(key)//out=> 0 1 2 3 4 keys
    //console.log(Programming[key]); //out =>js rb py java cpp
    
 }
// map in forin +++++++++++
 const newMap=new Map()
map.set('IN',"INDIA")
map.set('USA',"united state of america")
map.set('FR',"france")
map.set('INL',"england")
map.set('IN',"INDIA")
for (const key in newMap) {
    //  console.log(key); // mot iterable in forin _____

}

// ++++++++++foreach loop in obj +++++++++++

const codding=["js","ruby","java","javascript"]
codding.forEach(function/*functionname:name nahi hota hai*/(val){ 
   // console.log(val);
    // output =>js,java,.........
})

// using arrow function ++++
codding.forEach((item)=>{
   // console.log(item); // same output
})
 
// decond method ++++++++++
function printMe(item){
    //console.log(item); // same output

}
codding.forEach(printMe);

codding.forEach((item,index,Arr)=>{
    //console.log(item,index,Arr);

})

const myCoding=[
    {
        languageName:" javascript",
        languageFileName:" js"
    },
    {
        languageName:" java",
        languageFileName:" jv"
    },
    {
        languageName:" python",
        languageFileName:" py"
    }
]
myCoding.forEach((item)=>{
     console.log(`${item.languageName} :- ${item.languageFileName}`)
    
     //output => javascript,java,python
})