let addFriend = document.getElementById("add");
let removeFriend = document.getElementById("remove");

let name = document.querySelector("h1");
let nameTag = document.querySelector("h5");

let flag = 0;
addFriend.addEventListener("click",function(){
    if (flag === 0){
        nameTag.textContent = "Friends";
        nameTag.style.color="Green"
        addFriend.textContent = "Remove Friendk"
        addFriend.style.backgroundColor = "Blue";
        flag = 1;
    }else{
        nameTag.textContent = "Stranger";
        nameTag.style.color = "red"
        addFriend.textContent = "Add Friend"
        addFriend.style.backgroundColor = "cadetblue"
        flag = 0;
    }
})

