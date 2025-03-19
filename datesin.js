let myDate= new Date();
console.log(myDate);// complecated
console.log(myDate.toString());// thoda complecated
// type od date => object
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
//.to..........use kar sakte hai
let myCreatedate= new Date(2023,0,23);// month  0 se start hota hai 
console.log(myCreatedate.toString()+" create date");
// second method yy-mm-dd
let date=new Date("015-07-2004");
    console.log(date.toLocaleDateString());

    // let myTmeStamp=Date.now()
    // console.log(date.getTime());
    // console.log(Math.floor(Date.now())/1000);

    let newDate=new Date();
    console.log(newDate.getMonth()+1+" right date use +1 kar sakte hai");//getDate,get........
    //becouse date,month year 0 se start hota hai javascript me

    newDate.toLocaleString('default',{
        weekday:"narrow"
    });