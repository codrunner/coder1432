const course={
    courseName:"javascript",
    price:"999",
    courseInstructor:"ranjit kumar"
}
//console.log(course.courseInstructor); 
// other methode to access value
const {price:p,courseInstructor:ins}=course// me uska name v change kar sakte hai eg price:p
//console.log(price,courseInstructor)
console.log(p,ins);


// API format in jaSon
/*{
    "name":"ranjit",
    "courseName":"java",
    "price":"free",
} */
  
    //API in arrays form
   /* [
        { },
        { },
    ]  */