// let container = function (val){
//     let a = val();
//     console.log(a);
// }


// container(function(){
//     console.log("hello world");
//     return "byee";
// })


// closure using function


function counter(){
    let count = 0;
    return function(){
        count++;b
        return count;
    }
}

let val = counter();
console.log(val());
console.log(val()); 