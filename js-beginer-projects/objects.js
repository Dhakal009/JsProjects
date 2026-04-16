// let obj = {
//     name: "bikash",
//     age: 21
// }


// console.log(obj.name);



// let user = {
//     name:"bikash",
//     address: {
//         city:"Kohalpur",
//         location: {
//             lat:221,
//             long:331
//         }
//     }
// }

// let {lat} =  user.address.location;
// console.log(lat)



// let user = {
//     name:"bikash",
//     age:21,
//     gender:"male"
// }


// for(let key in user){
//     console.log(`${key} -> ${user[key]}`);
// }



// let user = {
//     name:"bikash",
//     age:21,
//     gender:"male"
// }

// console.log(Object.keys(user));
// console.log(Object.entries(user));


// swollow copy


// let user = {
//     name:"bikash",
//     address: {
//         city:"Kohalpur",
//         location: {
//             lat:221,
//             long:331
//         }
//     }
// }

// let user2 = {...user};
// user.address.city = "nepaljung";
// console.log(user2);\


// deep copy

// let user = {
//     name:"bikash",
//     address: {
//         city:"Kohalpur",
//         location: {
//             lat:221,
//             long:331
//         }
//     }
// }

// let user2 = JSON.parse(JSON.stringify(user));
// user.address.city = "nepaljung";
// console.log(user2);



 // optional chaining

// let user = {
//     name:"bikash",
//     addresses: {
//         city:"Kohalpur",
//         location: {
//             lat:221,
//             long:331
//         }
//     }
// }

// console.log(user?.address?.city);



// adding variable in object:


// let role = "admin"

// let user = {
//     name:"bikash",
//     address: {
//         city:"Kohalpur",
//         location: {
//             lat:221,
//             long:331
//         }
//     },
//     [role] :"Motey"
// }

// console.log(user);


// 1.


// let key = "age";
// const obj = {
//     age:13,
// };

// console.log(obj[key]);



// 2


// const user = {
//     "first-name" : "Bikash"
// };

// let {"first-name": firstName}  = user;
// console.log(firstName);


// 3


// const course = {
//     title:"JavaScript",
//     duration:"4 weeks"
// };

// Object.entries(course).forEach(function(val){
//     console.log(`${val[0]}: ${val[1]}`);
// })

// 4

// const key = "role";

// const user = {
//     name: "bikash",
//     [key]:"Manager"
// };

// console.log(user);