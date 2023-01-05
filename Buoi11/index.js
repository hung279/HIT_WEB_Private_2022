// Callback

function callbackfn(str) {
    console.log("Hello ",str);
}

function callback2() {
    console.log("Helllloooo");
}

function sayHello(call) {
    call("HIT Open Day");
    console.log("Chạy bc 1");
    // call();
}
// callbackfn("anh em");
// sayHello(callbackfn);

let arr = [1, 2, 3, 4, 5];

// function LoopForEach(value, index, arr) {
//     console.log(value);
// }

// arr.forEach(LoopForEach);

// arr.forEach(function (value) {
//     console.log(value);
// });

//arrow function
// arr.forEach((value) => {
//     console.log(value);
// })


// map()

let arr2 = arr.map(function(val, index, arr) {
    // console.log(index);
    return val*val;
})
//arrow function
// let arr2 = arr.map((val, index) => {
//     return val * val;
// })


// console.log(arr2);

let arr3 = arr.filter(function (val) {
    return val%2==0;
})
// console.log(arr3);

// arr.map()

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);
// // [10, 2, 3, 4, 5]
// let a = arr.reduce(function (preValue, curValue, index, arr) {
//     console.log("Giá trí trước: ", preValue);
//     console.log("Giá trị sau: ", curValue);
//     console.log("Chỉ số: ", index);
//     return preValue + curValue;
// }, 0);

// console.log(a);

let arrN = [7, 9, 23, 9, 8]

let bool = arrN.some(function (val, index, arr) {
    // console.log(val);
    return val > 6;
})

let bool2 = arrN.every(function (val, index, arr) {
    return val > 6;
})

//sort()
// console.log(arrN);
// let newArr = arrN.sort(function(a, b) {
//     return a>b ? -1 : 1;
// });
// console.log(newArr);

const name = 'javascript';
const nameArray = Array.from(name);

// console.log(name); // output: javascript
// console.log(nameArray); // output: ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']


let list = [
    {
        name: "H",
        class: "CNTT"
    },
    {
        name: "B",
        class: "CNTT"
    },
    {
        name: "C",
        class: "CNTT"
    }
]

// template string
// let a = 3;
// console.log(`so a ${a}`);

let arrstring = list.map(function (val) {
    return `
        <tr>
            <td>${val.name}</td>
            <td>${val.class}</td>
        </tr>
    `
})

console.log(arrstring.toString());
