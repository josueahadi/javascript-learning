let x = {
    a: {
        b: 2,
    },
};

let y = x;
console.log(x); // { a: { b: 2 } }
console.log(y); // { a: { b: 2 } }

x = 1;

console.log(x); // 1
console.log(y); // { a: { b: 2 } }


let z = y.a;

y = "mozilla";
console.log(x); // 1
console.log(y); // 'mozilla'
console.log(z); // { b: 2 }

z = null;
console.log(x); // 1
console.log(y); // 'mozilla'
console.log(z); // null