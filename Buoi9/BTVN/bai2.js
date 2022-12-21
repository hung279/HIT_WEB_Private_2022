//cho object

const obj = {
  name: "Hưng",
  age: 20,
  email: "dth27902@gamil.com"
}

//viết hàm run xử lý sao cho ra kết quả là một mảng như output dưới đây
//gợi ý: khởi tạo 1 array

const run = (object) => {
  let arr = [];
  for (const key in object) {
    arr.push(key + ": " + object[key]);
  }
  return arr;
};

console.log(run(obj));
// Output:
// [
//      "name: Hưng",
//      "age: 20",
//      "emai: dth27902@gmail.com"
// ]
