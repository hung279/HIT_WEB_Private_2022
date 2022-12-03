// console.log("đẹp troai");

// var a = 'Hưng';
// comment
/**
 * Đây là comment
 */

// var, let, const
// => để về nhà phân biệt cho 3 cái này


//number
var a = 5;
var b = 3;
// var a = 3.3;
// var a = "Hưng";
// var a = true;
// console.log(a/b);

var c = a/b;
// console.log(parseInt(c));
// console.log(typeof(a));
// console.log(null == undefined);
// var n = NaN+3; //Not a number

//string
var s = 'Hưng đẹp trai';
var chieudaistring = s.length;
// console.log(s[0]);
var s2 = " number one"
// console.log(s + s2);

//array
// var arr = [1, 2, 4, 5];

//object
var user = {
    name: "Hưng",
    year: 2004
};
// console.log(user.year);
// object['ten_thuoc_tinh'];
// console.log(user['name']);

//thêm thuộc tính
user['email'] = 'hungnher279@gmail.com';
console.log(user);
delete user.email;
console.log(user);


//function 
function sayHello() {
    console.log("hello");
}
sayHello()

function sum(a, b, c) {
    return a + b + c;
}

var t = sum(a, b, c)