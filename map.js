//filter
//const myNums=[1,2,3,4,5,6,7,8]
//const newNums=myNums.filter((num)=> num >4)
//console.log(newNums);//out=>5,6,7,8

//using scop return likhna padega
//const newNums=myNums.filter((num) =>{
    //return num>4
    //console.log(newNums)
//})
//console.log(newNums);//out =>[5,6,7,8]

// using forEach()
const newNums=[0,3,5,6,1,8,6]
newNums.forEach((numb)=>{
    if(numb>4){
       // console.log(numb)
    }
})

// access data from database 
const book=[
    {
        title:'book one',genre:'math',publish:1974,edition:2004
    },
    {
        title:'book two',genre:'physics',publish:1980,edition:2007
    },
    {
        title:'book three',genre:'chemistry',publish:1980,edition:2010
    },
    {
        title:'book four',genre:'biology',publish:1990,edition:2012
    },
    {
        title:'book five',genre:'history',publish:2001,edition:2014
    },
]
//const userbooks=book.filter((bk)=>bk.publish>1980);
//const userbooks=book.filter((bk)=>bk.edition===2012);
const userbooks=book.filter((bk)=>{

 return bk.publish>=1990 && bk.genre==='history'
})
//console.log(userbooks);


// ++++++++++++ use map ++++++++++
const myNumber=[1,2,3,4,5,7,8];
//const newNumbs=myNumber.map((num)=>num+10); //second method
const newNumbs=myNumber.map((num)=>{
    return num+10;
})
//console.log(newNumbs);

// chaining rule using map and filter+++++++
const myNum=[1,2,3,4,5,6,7,8,9]
 const myresult=myNum  // aap yaha { lagakar return v kar sakte hai}
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40);
  console.log(myresult);              