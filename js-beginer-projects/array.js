
// push


// arr.push(5)
// arr.pop();
// arr.unshift(6);
// arr.shift();
// console.log(arr)


// // arr.splice(2,1);
// let arrPart = arr.slice(3,5);
// console.log(arr);
// console.log(arrPart);



// sort

// let arr = [3, 4, 6, 8, 1];
// console.log(arr);
// let sortedArray = arr.sort( (a,b)=> a-b );
// console.log(sortedArray);


// foreach

// let arr = [3,3,4,3,2,3,43]
// arr.forEach((val)=> console.log(val));

 // map ==> naya array banauney pahila ko array lai change garara

//  let arr = [3, 6, 7, 3, 8, 4];
//  let doubleArr = arr.map((val) => val * 2);
//  console.log(doubleArr);

//  // new sorted array;

//  let sortedArr = arr.slice().sort((a,b)=>a-b);
//  console.log(sortedArr)





// filter


// let arr = [3,2,1,5,6,4,8];
// let newArr = arr.filter(function(val){
//     if (val > 4) return true;
// })
// console.log(newArr);




// reduce
// let arr = [3,4];
// let sum = arr.reduce(function(accumulator,val){
//     return accumulator + val;
// },0)

// console.log(sum);

// find


// let arr = [3,2,5,6]
// let result  = arr.find(function(val){
//     return val === 2
// })

// console.log(result);



// distructuring 

// let arr = [2,3,4,5];
// let [a,b,,c] = arr;
// console.log(a,b,c);



// // spead operator

// let arr = [1,2,3,34,4];
// let arrCopy = [...arr];
// console.log(arr);
// console.log(arrCopy);


// question
// 
// 1.
// let colors = ["Green", "Yellow"];
// colors.splice(1,0,"Red","Blue");
// console.log(colors);


// 2.
    // let items = [1,2,3,4,5,6,7];
    // let newItem = items.slice(2,5);
    // console.log(newItem);


// 3.
    // let names = ["Zara", "Arjun", "Mira", "Bhavya"];
    // names.sort().reverse();
    // console.log(names);


// // 4.
//         let arr = [5,12,8,20,3];
//         let newArr = arr.filter(function(val){
//             if(val > 10) return true;
//         })
//         console.log(newArr);
          


// 5

    // let arr = [10,20,30];
    
    // let sum = arr.reduce(function(acc , val){
    //     return acc + val;
    // },0);

    // console.log(sum);


// 6.

    // let arr = [12,15,3,8,20];
    // let lessThen10 = arr.find(function(val){
    //     return val < 10;

    // });
    // console.log(lessThen10);    


// 7.

    // let a = [2,3,4];
    // let b = [3,5,6];
    // let c = [...a, ...b];
    // console.log(c);

//8

    // let countries = ["nepal" ,"china"];
    // countries = ["India", ...countries];
    // console.log(countries);

// 9 

    // let arr = [1,2,3];
    // let arr2 = [...arr];
    // arr.pop();
    // console.log(arr2);