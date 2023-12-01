let emp={}
let user={
    uname:'suvarna',
    uemail:"suv@gmail.com"
}
// finding empty object or not using if else 
if(Object.keys(emp).length > 0){
    console.log("Not empty object")
}
else{
    console.log("Empty object")
}
//finding empty object or not using ternery operator
Object.keys(user).length>0?console.log("object is not empty "):console.log("object is empty")