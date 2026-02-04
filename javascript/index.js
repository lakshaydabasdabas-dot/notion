var a = 10.22;
console.log(a);

a = "Hello World";
console.log(a);

a = true;
console.log(a);

a = null;
console.log(a);

a = undefined;
console.log(a);

let arr = [1, 2, 3, a, "lakshay"];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);