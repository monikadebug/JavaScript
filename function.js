

//function
function fun1() {
    console.log("hello fun 1");
}

// fun1();//calling

//annoymouys fun - bina naame ka fun

//function expression
const fun2 = function () {
    console.log("fun 2");
}

// fun2()


// arrow function
const fun3 = (a) => {
    console.log("fun 3");
    return a;
}


const fun32 = (a, b) => a * b
const fun33 = a => a * a
fun3()
console.log(fun32(2, 3));
console.log(fun33(7));

// IIFE

(()=>{
    console.log("hello iife");
})()