
// let count = 10;
// let interval  = setInterval(()=>{
//    if(count>=1){
//     count--;
//     console.log(count);
//    }else{
//     clearInterval(interval);
//    }
// },1000)



const button = document.querySelector("#startBtn");
const progress = document.querySelector("#progress");
const percentage = document.querySelector("#percent");
const h2 = document.querySelector("h2")


button.addEventListener("click",()=>{
    let count = 0;
    let progressBar = setInterval(()=>{
        if(count < 100){
            count++;
            progress.style.width = `${count}%`;
            percentage.textContent = `${count}%`;
        }else{
            clearInterval(progressBar);
            h2.textContent="Downloaded"
        }
        
    },100);
})