// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// var heading = document.getElementsByTagName("h1");

// var heading = document.querySelector(".class-heading");

// var link = document.querySelector("#link")
// console.log(heading.textContent);
var input = document.querySelector("#abc");
// console.log(input.value);
// var box = document.getElementById("box");
// var content = document.querySelector("#box #content");

// console.log(content);


//tang giam

var btntang = document.getElementById("tang");
// var btntang = document.querySelector("#tang");

var btngiam = document.getElementById("giam");

var number = document.getElementById("number");

var countNumber = number.textContent*1;

// console.log({btntang});
// console.log(typeof(countNumber));
// number.textContent = 1;
function tangso(count) {
    countNumber += count;
    input.value = ChanHayLe(countNumber);
    number.textContent = countNumber;
}

function giamso(count) {
    countNumber -= count;
    input.value = ChanHayLe(countNumber);
    number.textContent = countNumber;
}

function ChanHayLe(number) {
    if (number % 2 == 0) {
        return "Chẵn";
    }
    return "Lẻ";
}