// const h1 = document.querySelector("h1");

// h1.innerText = "hii bikash how are you?"


// const h2 = document.createElement("h2");
// h2.innerText = "I am fine and you";
// document.body.append(h2);


// const list = document.querySelectorAll("li");

// list.forEach(val => {
//     console.log(val.textContent);
// });


// const image =  document.querySelector("img");
// image.setAttribute("src","https://images.unsplash.com/photo-1773083405815-34ea5253db0b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

// const img = document.createElement("img")
// img.classList.add("placeholder");
// img.setAttribute("src","https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png");
// document.querySelector("div").prepend(img);



// const list = document.querySelector("li")
// list.remove();

//or

// const ul = document.querySelector("ul");
// const li = document.querySelector("li");

// ul.removeChild(li);



// const ul = document.querySelectorAll("ul li:nth-child(2n)");

// ul.forEach(val => {
//     val.classList.add("highlight")
// });

// let counter = 0
// const pg = document.querySelector("p");
// pg.addEventListener("dblclick",() =>{
//     if (counter === 0){
//     pg.style.color = "red";
//     counter = 1;
//     }
//     else{
//     pg.style.color = "black";
//     counter = 0;
//     }
// })

// const body = document.querySelector("body");

// body.addEventListener("keyup",()=>{
//     alert("fuck you")
// })


// const input = document.querySelector("input");

// input.addEventListener("input",(val)=>{
//     if(val.data !== null){
//         console.log(val.data);
//     }
// })

// const selection  = document.querySelector("select");
// const heading = document.querySelector("#heading");

// selection.addEventListener("change",(e)=>{
//     heading.textContent = `${e.target.value} Choosen`;
// })


// const heading = document.querySelector("#heading");
// window.addEventListener("keydown",(e)=>{
//     if(e.key === " "){
//         heading.textContent = "SPACE"
//     }
//     else{
//         heading.textContent = e.key
//     }
    
// })

// const input = document.querySelector("input");
// const btn = document.querySelector("p");

// btn.addEventListener("click",(e)=>{
//     input.click();
// })

// input.addEventListener("change",(e)=>{
//     btn.textContent = e.target?.files[0].name;
// })



// const form = document.querySelector("form");
// const main = document.querySelector(".main")
// const container = document.querySelector(".container")
// const inputs = document.querySelectorAll("input");

// form.addEventListener("submit",(dets) => {
//         dets.preventDefault();
//         const card = document.createElement("div")
//         card.classList.add("card");

//         const profile = document.createElement("div");
//         profile.classList.add("profile");
        
//         const img = document.createElement("img");
//         img.setAttribute("src",inputs[3].value)
        
//         const h1 = document.createElement("h1");
//         h1.textContent = inputs[0].value;

//         const details = document.createElement("div");
//         details.classList.add("details");

//         const h3 = document.createElement("h3");
//         h3.textContent = "Details: ";

//         const p1 = document.createElement("p");
//         p1.textContent = `Age: ${inputs[1].value}`;

//         const p2 = document.createElement("p");
//         p2.textContent = `Email: ${inputs[2].value}`;


//         // apending classes:

//         profile.appendChild(img);

//         card.appendChild(profile);
//         card.appendChild(h1);
//         card.appendChild(details);

//         details.appendChild(h3);
//         details.appendChild(p1);
//         details.appendChild(p2);

//         container.appendChild(card);

//         inputs.forEach((inp) => {
//                 if(inp.type !== "submit"){
//                         inp.value = "";
//                 }
//         })
        
// })


// const box = document.querySelector(".box");
// box.addEventListener("mouseover",()=>{
//         box.style.backgroundColor = "white"
// })

// box.addEventListener("mouseout",()=>{
//         box.style.backgroundColor = "black";
// })


// const box = document.querySelector(".box");

// window.addEventListener("mousemove",(dets)=>{
//         box.style.top = dets.clientY + "px";
//         box.style.left = dets.clientX + "px";
// })