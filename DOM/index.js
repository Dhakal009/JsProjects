// var var1 = document.querySelector("h1");
// var1.innerHTML = "CHANGED HTML";

// var1.style.color="red";

// var1.style.backgroundColor = "yellow";


// event listner

// var1.addEventListener("click",function(){
//     var1.innerHTML = "I JUST LEARNED EVENT LISTNER";
//     var1.style.backgroundColor = "black";
//     var1.style.color = "yellow"
// })


// var btn = document.querySelector("button");
// var bulb = document.querySelector("#bulb");


// var flag = 0;
// btn.addEventListener("click", function(){
//     if(flag === 0 ){
//         bulb.style.backgroundColor = "yellow";
//         btn.innerHTML = "OFF";
//         flag = 1;
//     }else{
//         bulb.style.backgroundColor = "white";
//         btn.innerHTML = "ON";
//         flag = 0;
//     }
// })


const h = document.querySelectorAll("h1");

h.forEach(function(e){
    console.log(e);
})